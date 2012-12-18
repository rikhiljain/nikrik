include ActionView::Helpers::NumberHelper

class MotorQuote
  attr_accessor :company_id,:company_name, :total_premium, :discount , :final_premium

  def initialize(company_id,company_name, total_premium, final_premium)
    @company_id = company_id
    @company_name = company_name
    @total_premium = number_to_currency(total_premium, :precision => 0, :unit => "")
    @final_premium = number_to_currency(final_premium, :precision => 0, :unit => "")
    @discount = number_to_currency(total_premium-final_premium, :precision => 0, :unit => "")
  end


end