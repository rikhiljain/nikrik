include ActionView::Helpers::NumberHelper

class Travel::Quote
  attr_accessor :company_id, :company_name, :total_premium, :service_tax, :final_premium,:plan, :user_id, :travel_search_id
  	

  def self.format_fields (quote)
    quote.total_premium = ((quote.total_premium.nil?)? 0 : quote.total_premium.ceil )
    quote.final_premium = ((quote.final_premium.nil?)? 0 : quote.final_premium.ceil )
  end

 end