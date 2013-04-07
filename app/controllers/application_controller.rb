class ApplicationController < ActionController::Base
  protect_from_forgery
  
  
  rescue_from CanCan::AccessDenied do |exception|
    redirect_to root_path, :alert => exception.message
  end

# Overwriting the sign_out redirect path method
  def after_sign_out_path_for(resource_or_scope)
    root_path
  end

  # Overwriting the sign_in redirect path method
  def after_sign_in_path_for(resource_or_scope)
    root_path
  end

  
#Rails raises an InvalidAuthenticityToken when the CSRF token doesn't match. 
  def handle_unverified_request
    super
    cookies.delete 'remember_user_token' # Use by Device gem to store session token
    sign_out :user
  end

end
