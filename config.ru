# This file is used by Rack-based servers to start the application.

require ::File.expand_path('../config/environment',  __FILE__)

if Rails.env.production?
  DelayedJobWeb.use Rack::Auth::Basic do |username, password|
    username == CONFIG[:job_username] && password == CONFIG[:job_password]
  end
end

run Nikrik::Application
