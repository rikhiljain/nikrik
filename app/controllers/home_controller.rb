class HomeController < ApplicationController
  def index
      @users = User.all
  end

  def admin

  end

  def callus
    contact = Contact.new
    contact.email_address = params[:email_address]
    contact.mobile_number = params[:mobile_number]

    ContactMailer.callus_email(contact).deliver

    redirect_to root_url, :notice => "We will Contact you within 24 hours"

  end
end
