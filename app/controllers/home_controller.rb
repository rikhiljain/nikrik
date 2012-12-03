class HomeController < ApplicationController
  def index
    debugger
    @users = User.all
  end
end
