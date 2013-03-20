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

  def complaint
    @complaint = Complaint.new(params[:complaint])
  
    respond_to do |format|
      if @complaint.save
         format.html { redirect_to home_complaint_url, notice: 'Your Complaint has been registered. We will contact you within 24 hours.' }
         format.json { head :no_content }
      else
        format.html { render action: "complaint" }
        format.json { render json: @complaint.errors, status: :unprocessable_entity }
      end
    end

  end

  def new_complaint
    @complaint = Complaint.new
    respond_to do |format|
      format.html { render :template => '/home/complaint'}
    end

  end

end
