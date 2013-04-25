class ContactMailer < ActionMailer::Base
  default from: "admin@insuranceshopee.com"

  COMPANY_ADMIN_EMAIL = "admin@insuranceshopee.com"
  COMPANY_CARE_EMAIL = "care@insuranceshopee.com"

  def callus_email(contact)
    @contact = contact
    mail(to: contact.email, bcc: COMPANY_ADMIN_EMAIL, subject: 'Thanks for contacting Insuranceshopee.com').deliver
  end

  def referral_email(referral)
    @referral = referral
    mail(to: referral.email, bcc: COMPANY_ADMIN_EMAIL, subject: 'Thanks for providing referral to Insuranceshopee.com').deliver
  end

  def buy_motor_email(search,idvChart)
    @search = search
    @idvChart = idvChart
    mail(to: search.email_id , bcc: COMPANY_ADMIN_EMAIL , subject: 'Motor Insuarance details from InsuranceShopee.com').deliver
  end

  def buy_health_email(search)
    @search = search
    mail(to: search.email_id , bcc: COMPANY_ADMIN_EMAIL , subject: 'Health Insuarance details from InsuranceShopee.com').deliver
  end

  def buy_travel_email(search)
    @search = search
    mail(to: search.email_id , bcc: COMPANY_ADMIN_EMAIL , subject: 'Travel Insuarance details from InsuranceShopee.com').deliver
  end

  def complaint_email(contact)
    @contact = contact
    mail(to: contact.email, bcc: COMPANY_ADMIN_EMAIL, subject: 'Your complaint has been registered with InsuranceShopee.com').deliver
  end

  def send_an_advisor_email(contact)
    @contact = contact
    mail(to: contact.email,  bcc: COMPANY_ADMIN_EMAIL, subject: 'Send advisor request to InsuranceShopee.com').deliver
  end

  def upload_policy_email(poilcy)
    @policy = policy
    subject = policy.policy_type + " policy has been uploaded on InsuranceShopee.com"
    mail(to: policy.user.email,  bcc: COMPANY_ADMIN_EMAIL, subject: subject).deliver
  end

end
