class Motor::PoliciesController < ApplicationController
  # GET /motor_policies
  # GET /motor_policies.json
  def index
    @motor_policies = Motor::Policy.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @motor_policies }
    end
  end

  # GET /motor_policies/1
  # GET /motor_policies/1.json
  def show
    @motor_policy = Motor::Policy.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @motor_policy }
    end
  end

  # GET /motor_policies/new
  # GET /motor_policies/new.json
  def new
    @motor_policy = Motor::Policy.new
    @motor_policy.user_id = params[:user_id]
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @motor_policy }
    end
  end

  # GET /motor_policies/1/edit
  def edit
    @motor_policy = Motor::Policy.find(params[:id])
    @user =  @motor_policy.user
    @motor_policies = Motor::MotorPolicy.where("user_id=?", @motor_policy.user_id)
    @is_edit = true
    render :template => "/admin_users/show"
  end

  # POST /motor_policies
  # POST /motor_policies.json
  def create
    @motor_policy = Motor::MotorPolicy.new(params[:motor_policy])
     @is_edit = false
    upload

    respond_to do |format|
      if @motor_policy.save
        format.html { redirect_to "/admin_users/#{@motor_policy.user_id}" , notice: 'Motor policy was successfully created.' }
        format.json { render json: @motor_policy, status: :created, location: @motor_policy }
      else
        @user =  @motor_policy.user
        @motor_policies = Motor::Policy.where("user_id=?", @motor_policy.user_id)
        format.html { render :template => "/admin_users/show" }
        format.json { render json: @motor_policy.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /motor_policies/1
  # PUT /motor_policies/1.json
  def update
    @motor_policy = Motor::Policy.find(params[:id])
    new_motor_policy = Motor::Policy.new(params[:motor_policy])
    uploaded_io = params[:motor_policy][:policy_path]
    unless uploaded_io.nil?

      file_name =   new_motor_policy.policy_id.to_s + "_" +  new_motor_policy.user_id.to_s  + File.extname(uploaded_io.original_filename)

      file_upload_path = Rails.root.join('uploads', 'motor', new_motor_policy.start_date.year.to_s, new_motor_policy.start_date.month.to_s, @motor_policy.company.name, file_name )
      FileUtils.mkdir_p(File.dirname(file_upload_path))
      new_motor_policy.policy_path =  file_upload_path.to_s
      File.open(file_upload_path, 'wb') do |file|
        file.write(uploaded_io.read)
      end
    end
    respond_to do |format|
      if @motor_policy.update_attributes(Motor::Policy.to_hash(new_motor_policy))
        format.html { redirect_to "/admin_users/#{@motor_policy.user_id}" , notice: 'Motor policy was successfully created.' }
        format.json { head :no_content }
      else
        @user =  @motor_policy.user
        @is_edit = true
        @motor_policies = Motor::Policy.where("user_id=?", @motor_policy.user_id)
        format.html { render :template => "/admin_users/show" }
        format.json { render json: @motor_policy.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /motor_policies/1
  # DELETE /motor_policies/1.json
  def destroy
    @motor_policy = Motor::Policy.find(params[:id])
    @motor_policy.destroy

    respond_to do |format|
      format.html { redirect_to motor_policies_url }
      format.json { head :no_content }
    end
  end

  def download
    motor_policy = Motor::Policy.find(params[:id])

    begin
      file_ext = File.extname(motor_policy.policy_path)

      File.open(motor_policy.policy_path, 'rb') do |f|
        send_data( f.read, :filename => "#{motor_policy.policy_id}.#{file_ext}", :type => "application/#{file_ext}")
      end
    
    rescue Exception => e
     Rails.logger.error "OH NO: #{e}"
     send_data( "Error Occure while Downloading File", :filename => "system_error.text", :type => "application/text")
    ensure
     # f.close unless f.nil?
    end

  end

  def upload
    uploaded_io = params[:motor_policy][:policy_path]
    unless uploaded_io.nil?

      file_name =   @motor_policy.policy_id.to_s + "_" +  @motor_policy.user_id.to_s  + File.extname(uploaded_io.original_filename)

      file_upload_path = Rails.root.join('uploads', 'motor', @motor_policy.start_date.year.to_s, @motor_policy.start_date.month.to_s,@motor_policy.company.name, file_name )

      FileUtils.mkdir_p(File.dirname(file_upload_path))
      
      @motor_policy.policy_path =  file_upload_path.to_s
      File.open(file_upload_path, 'wb') do |file|
        file.write(uploaded_io.read)
      end
    end

  end

end
