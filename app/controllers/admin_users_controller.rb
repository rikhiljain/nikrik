class AdminUsersController < ApplicationController
 
 def index
    authorize! :index, @user, :message => 'Not authorized as an administrator.'
    @users = User.search(params[:user_search])
    @user_search = params[:user_search]
    @user = User.new

  end

  def show
    @user = User.find(params[:id])
    @motor_policies = MotorPolicy.where("user_id=?", @user.id)
    @motor_policy = MotorPolicy.new
    @motor_policy.user_id = @user.id

  end

  def create

    @user = User.new(params[:user])
    @user.password = 'test123'
    @user.password_confirmation = 'test123'
    @users = User.search(params[:user_search])
     
    if @user.save
       redirect_to admin_users_path, notice: 'User was successfully created.' 
    else
         render action: 'index'
     end
  end
  
  def update
    authorize! :update, @user, :message => 'Not authorized as an administrator.'
    @user = User.find(params[:id])
    if @user.update_attributes(params[:user], :as => :admin)
      redirect_to admin_users_path, :notice => "User updated."
    else
      redirect_to admin_users_path, :alert => "Unable to update user."
    end
  end
    
  def destroy
    authorize! :destroy, @user, :message => 'Not authorized as an administrator.'
    user = User.find(params[:id])
    unless user == current_user
      user.destroy
      redirect_to admin_users_path, :notice => "User deleted."
    else
      redirect_to admin_users_path, :notice => "Can't delete yourself."
    end
  end



def new
  
  @user = User.new
  respond_to do |format|
    format.html # new.html.erb
    format.json { render json: @user }
  end
end
end
