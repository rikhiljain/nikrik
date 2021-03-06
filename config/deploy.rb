require "bundler/capistrano"

server "178.79.190.82", :web, :app, :db, primary: true

set :application, "nikrik"
set :user, "root"
set :deploy_to, "/home/#{user}/apps/#{application}"
set :deploy_via, :export
set :use_sudo, false
set :rails_env, "production" #added for delayed job

set :scm, "git"
set :repository, "git@github.com:rikhiljain/#{application}.git"
#set :repository, "https://github.com/rikhiljain/#{application}.git"
set :branch, "master"

default_run_options[:pty] = true
ssh_options[:forward_agent] = true

after "deploy", "deploy:cleanup" # keep only the last 5 releases
after "deploy", "delayed_job:restart"

namespace :deploy do
  %w[start stop restart].each do |command|
    desc "#{command} unicorn server"
    task command, roles: :app, except: {no_release: true} do
      run "chmod 755 #{current_path}/config/unicorn_init.sh"
      run "/etc/init.d/unicorn_#{application} #{command}"
    end
  end

  task :setup_config, roles: :app do
    sudo "ln -nfs #{current_path}/config/nginx.conf /etc/nginx/sites-enabled/#{application}"
    sudo "ln -nfs #{current_path}/config/unicorn_init.sh /etc/init.d/unicorn_#{application}"
    run "mkdir -p #{shared_path}/config"
    put File.read("config/database.example.yml"), "#{shared_path}/config/database.yml"
    put File.read("config/application.yml"), "#{shared_path}/config/application.yml"
    puts "Now edit the config files in #{shared_path}."
  end
  after "deploy:setup", "deploy:setup_config"
  
  task :symlink_config, roles: :app do
    run "ln -nfs #{shared_path}/config/database.yml #{release_path}/config/database.yml"
    run "ln -nfs #{shared_path}/config/application.yml #{release_path}/config/application.yml"
  end
  after "deploy:finalize_update", "deploy:symlink_config"

  desc "Make sure local git is in sync with remote."
  task :check_revision, roles: :web do
    unless `git rev-parse HEAD` == `git rev-parse origin/master`
      puts "WARNING: HEAD is not the same as origin/master"
      puts "Run `git push` to sync changes."
      exit
    end
  end
  before "deploy", "deploy:check_revision"

end

namespace :delayed_job do
    def rails_env
      fetch(:rails_env, false) ? "RAILS_ENV=#{fetch(:rails_env)}" : ''
    end

    def args
      fetch(:delayed_job_args, "")
    end

    def roles
      fetch(:delayed_job_server_role, :app)
    end
    
    def delayed_job_command
      fetch(:delayed_job_command, "script/delayed_job")
    end

    desc "Stop the delayed_job process"
    task :stop, :roles => lambda { roles } do
      run "chmod 755 #{current_path}/#{delayed_job_command}"
      run "cd #{current_path};#{rails_env} #{delayed_job_command} stop"
    end

    desc "Start the delayed_job process"
    task :start, :roles => lambda { roles } do
      run "chmod 755 #{current_path}/#{delayed_job_command}"
      run "cd #{current_path};#{rails_env} #{delayed_job_command} start #{args}"
    end

    desc "Restart the delayed_job process"
    task :restart, :roles => lambda { roles } do
      run "chmod 755 #{current_path}/#{delayed_job_command}"
      run "cd #{current_path};#{rails_env} #{delayed_job_command} restart #{args}"
    end
end


