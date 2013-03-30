class ContactMailer < ActionMailer::Base
  default from: "admin@insuranceshopee.com"

  COMPANY_ADMIN_EMAIL = "admin@insuranceshopee.com"
  COMPANY_CARE_EMAIL = "care@insuranceshopee.com"

  def callus_email(contact)
    @contact = contact
    mail(to: COMPANY_ADMIN_EMAIL, subject: 'Call Customer').deliver
  end

  def referral_email(referral)
    @referral = referral
    mail(to: COMPANY_ADMIN_EMAIL, subject: 'Referral from Customer').deliver
  end

  def buy_motor_email(search,idvChart)
    @search = search
    @idvChart = idvChart
    mail(to: search.email_id , bcc: COMPANY_ADMIN_EMAIL , subject: 'Motor Insuarance Details').deliver
  end

  def buy_health_email(search)
    @search = search
    mail(to: search.email_id , bcc: COMPANY_ADMIN_EMAIL , subject: 'Health Insuarance Details').deliver
  end

  def buy_travel_email(search)
    @search = search
    mail(to: search.email_id , bcc: COMPANY_ADMIN_EMAIL , subject: 'Travel Insuarance Details').deliver
  end

  def complaint_email(contact)
    @contact = contact
    mail(to: COMPANY_ADMIN_EMAIL, subject: 'Customer Complaint').deliver
  end

  def send_an_advisor_email(contact)
    @contact = contact
    mail(to: COMPANY_ADMIN_EMAIL, subject: 'Send an Advisor to Customer').deliver
  end

end
