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

    ContactMailer.delay.callus_email(contact)
    respond_to do |format|
      format.json { render :json => :success}
    end

  end
end
