include ActionView::Helpers::NumberHelper

class Health::Quote
  attr_accessor :company_id, :total_premium, :user_id, :health_search_id
  	

  def self.format_fields (quote)
    quote.total_premium = ((quote.total_premium.nil?)? 0 : quote.total_premium.ceil )
  end

 end