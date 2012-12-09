class MotorQuote
  attr_accessor :company, :total_premium, :discount

  def initialize(company, total_premium, discount)
    @company = company
    @total_premium = total_premium
    @discount = discount
  end


end