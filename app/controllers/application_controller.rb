class ApplicationController < ActionController::Base
  protect_from_forgery
  
  after_filter :store_location

  def store_location
    # store last url as long as it isn't a /users path
    session[:previous_url] = request.fullpath unless request.fullpath =~ /\/users/
  end

  rescue_from CanCan::AccessDenied do |exception|
    redirect_to root_path, :alert => exception.message
  end

# Overwriting the sign_out redirect path method
  def after_sign_out_path_for(resource_or_scope)
    root_path
  end

  # Overwriting the sign_in redirect path method
  def after_sign_in_path_for(resource_or_scope)
    session[:previous_url] || root_path
  end

  def after_update_path_for(resource)
    session[:previous_url] || root_path
  end

#Rails raises an InvalidAuthenticityToken when the CSRF token doesn't match. 
  def handle_unverified_request
    super
    cookies.delete 'remember_user_token' # Use by Device gem to store session token
    sign_out :user
  end

end
