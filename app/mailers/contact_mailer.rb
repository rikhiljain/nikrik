class ContactMailer < ActionMailer::Base
  default from: "from@example.com"

  CALL_US_TO_EMAIL = ""

  def callus_email(contact)
    @contact = contact
    mail(to: CALL_US_TO_EMAIL, subject: 'Call Customer')
  end
end
