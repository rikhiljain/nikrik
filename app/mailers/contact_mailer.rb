class ContactMailer < ActionMailer::Base
  default from: "from@example.com"

  CALL_US_TO_EMAIL = "rikhiljain@gmail.com"

  def callus_email(contact)
    @contact = contact
    mail(to: CALL_US_TO_EMAIL, subject: 'Call Customer').deliver
  end

  def referral_email(referral)
    @referral = referral
    mail(to: CALL_US_TO_EMAIL, subject: 'Referral from Customer').deliver
  end

end
