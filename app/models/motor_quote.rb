class MotorQuote
  attr_accessor :company_id,:company_name, :total_premium, :discount

  def initialize(company_id,company_name, total_premium, discount)
    @company_id = company_id
    @company_name = company_name
    @total_premium = total_premium
    @discount = discount
  end


end