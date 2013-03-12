class ContactMailer < ActionMailer::Base
  default from: "from@example.com"

  COMPANY_TO_EMAIL = "darshjain2009@gmail.com"

  def callus_email(contact)
    @contact = contact
    mail(to: COMPANY_TO_EMAIL, subject: 'Call Customer').deliver
  end

  def referral_email(referral)
    @referral = referral
    mail(to: COMPANY_TO_EMAIL, subject: 'Referral from Customer').deliver
  end

  def buy_motor_email(search,idvChart)
    @search = search
    @idvChart = idvChart
    mail(to: search.email_id , bcc: COMPANY_TO_EMAIL , subject: 'Motor Insuarance Details').deliver
  end

  def buy_health_email(search)
    @search = search
    mail(to: search.email_id , bcc: COMPANY_TO_EMAIL , subject: 'Health Insuarance Details').deliver
  end

  def buy_travel_email(search)
    @search = search
    mail(to: search.email_id , bcc: COMPANY_TO_EMAIL , subject: 'Travel Insuarance Details').deliver
  end

end
