include ActionView::Helpers::NumberHelper

class Health::Quote
  attr_accessor :company_id, :company_name,:plan, :total_premium, :service_tax, :final_premium,:points, :user_id, :health_search_id
  	

  def self.format_fields (quote)
    quote.total_premium = ((quote.total_premium.nil?)? 0 : quote.total_premium.ceil )
    quote.final_premium = ((quote.final_premium.nil?)? 0 : quote.final_premium.ceil )
    quote.points = ((quote.points.nil?)? 0 : quote.points.ceil )

  end

 end