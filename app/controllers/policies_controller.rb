class PoliciesController < ApplicationController
  
  def index
    @policies = Policy.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @policies }
    end
  end

  def show
    @policy = Policy.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @policy }
    end
  end

  # GET /motor_policies/new
  # GET /motor_policies/new.json
  def new
    @policy = Policy.new
    @policy.user_id = params[:user_id]
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @policy }
    end
  end

  # GET /motor_policies/1/edit
  def edit
    @policy = Policy.find(params[:id])
    @user =  @policy.user
    @policies = Policy.where("user_id=?", @policy.user_id)
    @is_edit = true
    render :template => "/admin_users/show"
  end

  # POST /motor_policies
  # POST /motor_policies.json
  def create
    @policy = Policy.new(params[:policy])
     @is_edit = false
    upload

    respond_to do |format|
      if @policy.save
        format.html { redirect_to "/admin_users/#{@policy.user_id}" , notice: 'Motor policy was successfully created.' }
        format.json { render json: @policy, status: :created, location: @policy }
      else
        @user =  @policy.user
        @policies = Policy.where("user_id=?", @policy.user_id)
        format.html { render :template => "/admin_users/show" }
        format.json { render json: @policy.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /motor_policies/1
  # PUT /motor_policies/1.json
  def update
    @policy = Policy.find(params[:id])
    new_policy = Policy.new(params[:policy])
    uploaded_io = params[:policy][:policy_path]
    policy_type = params[:policy][:policy_type]
    unless uploaded_io.nil?

      file_name =   new_policy.policy_id.to_s + "_" +  new_policy.user_id.to_s  + File.extname(uploaded_io.original_filename)

      file_upload_path = Rails.root.join('uploads', policy_type, new_policy.start_date.year.to_s, new_policy.start_date.month.to_s, @policy.company.name, file_name )
      FileUtils.mkdir_p(File.dirname(file_upload_path))
      new_policy.policy_path =  file_upload_path.to_s
      File.open(file_upload_path, 'wb') do |file|
        file.write(uploaded_io.read)
      end
    end
    respond_to do |format|
      if @policy.update_attributes(Policy.to_hash(new_policy))
        format.html { redirect_to "/admin_users/#{@policy.user_id}" , notice: 'Motor policy was successfully created.' }
        format.json { head :no_content }
      else
        @user =  @policy.user
        @is_edit = true
        @policies = Policy.where("user_id=?", @policy.user_id)
        format.html { render :template => "/admin_users/show" }
        format.json { render json: @policy.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /motor_policies/1
  # DELETE /motor_policies/1.json
  def destroy
    @policy = Policy.find(params[:id])
    @policy.destroy

    respond_to do |format|
      format.html { redirect_to motor_policies_url }
      format.json { head :no_content }
    end
  end

  def download
    user_id = 0
    if user_signed_in? 
      user_id = current_user.id
    else
      render :json => { :status => :redirect, :to => "/login"  }.to_json
      return
    end

    policy = Policy.find(params[:id])
    begin
      file_ext = File.extname(policy.policy_path)

      File.open(policy.policy_path, 'rb') do |f|
        send_data( f.read, :filename => "#{policy.policy_id}.#{file_ext}", :type => "application/#{file_ext}")
      end
    
    rescue Exception => e
     Rails.logger.error "OH NO: #{e}"
     send_data( "Error Occure while Downloading File", :filename => "system_error.text", :type => "application/text")
    ensure
     # f.close unless f.nil?
    end

  end

  def upload
    uploaded_io = params[:policy][:policy_path]
    policy_type = params[:policy][:policy_type]
    unless uploaded_io.nil?

      file_name =   @policy.policy_id.to_s + "_" +  @policy.user_id.to_s  + File.extname(uploaded_io.original_filename)

      file_upload_path = Rails.root.join('uploads', policy_type, @policy.start_date.year.to_s, @policy.start_date.month.to_s,@policy.company.name, file_name )

      FileUtils.mkdir_p(File.dirname(file_upload_path))
      
      @policy.policy_path =  file_upload_path.to_s
      File.open(file_upload_path, 'wb') do |file|
        file.write(uploaded_io.read)
      end
    end

  end

  def policies
    user_id = 0
    if (user_signed_in? && (current_user.has_role? :user) )
      user_id = current_user.id
    else
      render :json => { :status => :redirect, :to => "/login"  }.to_json
      return
    end
    
    @policies = Policy.where("user_id=?", user_id).order("start_date DESC")
    
    respond_to do |format|
      format.html { render :template => "/policies/user_list" }
      format.json { render json: @policies, :except=>  [:created_at, :updated_at,:discount,:user_id, :company_id], :methods => :company_name}
    end

  end


end
