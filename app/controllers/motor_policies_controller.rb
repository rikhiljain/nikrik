class MotorPoliciesController < ApplicationController
  # GET /motor_policies
  # GET /motor_policies.json
  def index
    @motor_policies = MotorPolicy.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @motor_policies }
    end
  end

  # GET /motor_policies/1
  # GET /motor_policies/1.json
  def show
    @motor_policy = MotorPolicy.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @motor_policy }
    end
  end

  # GET /motor_policies/new
  # GET /motor_policies/new.json
  def new
    @motor_policy = MotorPolicy.new
    @motor_policy.user_id = params[:user_id]
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @motor_policy }
    end
  end

  # GET /motor_policies/1/edit
  def edit
    @motor_policy = MotorPolicy.find(params[:id])
    @user =  @motor_policy.user
    @motor_policies = MotorPolicy.where("user_id=?", @motor_policy.user_id)
    @is_edit = true
    render :template => "/admin_users/show"
  end

  # POST /motor_policies
  # POST /motor_policies.json
  def create
    @motor_policy = MotorPolicy.new(params[:motor_policy])
     @is_edit = false
    upload

    respond_to do |format|
      if @motor_policy.save
        format.html { redirect_to "/admin_users/#{@motor_policy.user_id}" , notice: 'Motor policy was successfully created.' }
        format.json { render json: @motor_policy, status: :created, location: @motor_policy }
      else
        @user =  @motor_policy.user
        @motor_policies = MotorPolicy.where("user_id=?", @motor_policy.user_id)
        format.html { render :template => "/admin_users/show" }
        format.json { render json: @motor_policy.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /motor_policies/1
  # PUT /motor_policies/1.json
  def update
    @motor_policy = MotorPolicy.find(params[:id])
    new_motor_policy = MotorPolicy.new(params[:motor_policy])
    uploaded_io = params[:motor_policy][:policy_path]
    unless uploaded_io.nil?

      file_name =   new_motor_policy.policy_id.to_s + "_" +  new_motor_policy.user_id.to_s  + File.extname(uploaded_io.original_filename)

      file_upload_path = Rails.root.join('uploads', 'motor', new_motor_policy.start_date.year.to_s, new_motor_policy.start_date.month.to_s, @motor_policy.company.name, file_name )
      new_motor_policy.policy_path =  file_upload_path.to_s
      File.open(file_upload_path, 'wb') do |file|
        file.write(uploaded_io.read)
      end
    end
    respond_to do |format|
      if @motor_policy.update_attributes(MotorPolicy.to_hash(new_motor_policy))
        format.html { redirect_to "/admin_users/#{@motor_policy.user_id}" , notice: 'Motor policy was successfully created.' }
        format.json { head :no_content }
      else
        @user =  @motor_policy.user
        @is_edit = true
        @motor_policies = MotorPolicy.where("user_id=?", @motor_policy.user_id)
        format.html { render :template => "/admin_users/show" }
        format.json { render json: @motor_policy.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /motor_policies/1
  # DELETE /motor_policies/1.json
  def destroy
    @motor_policy = MotorPolicy.find(params[:id])
    @motor_policy.destroy

    respond_to do |format|
      format.html { redirect_to motor_policies_url }
      format.json { head :no_content }
    end
  end

  def download
    motor_policy = MotorPolicy.find(params[:id])
    File.open(motor_policy.policy_path, 'rb') do |f|
      send_data( f.read, :filename => "#{motor_policy.policy_id}.pdf", :type => "application/pdf")
    end
  end

  def upload
    uploaded_io = params[:motor_policy][:policy_path]
    unless uploaded_io.nil?

      file_name =   @motor_policy.policy_id.to_s + "_" +  @motor_policy.user_id.to_s  + File.extname(uploaded_io.original_filename)

      file_upload_path = Rails.root.join('uploads', 'motor', @motor_policy.start_date.year.to_s, @motor_policy.start_date.month.to_s,@motor_policy.company.name, file_name )
      @motor_policy.policy_path =  file_upload_path.to_s
      File.open(file_upload_path, 'wb') do |file|
        file.write(uploaded_io.read)
      end
    end

  end

end
