class Health::HealthPremium 

def initialize( search)
      @input = search
  end

  def  calculate_premium
  	results = Array.new
    health_charts = Health::HealthChart.find_by_coverage_age(@input.heath_cover, @input.adult_age)
    companies = Company.all
    debugger

    health_charts.each do |chart|

    	health_quote = Health::Quote.new
    	health_quote.company_id = chart.company_id
      health_quote.company_name = "abc"
    	health_quote.total_premium = chart.premium
    	if(@input.policy_for == 3)
    		health_quote.total_premium = health_quote.total_premium + chart.premium * 0.5
    	end
    	health_quote.total_premium = health_quote.total_premium + @input.no_of_childs* chart.premium * 0.25

      health_quote.final_premium = health_quote.total_premium
    	
    	Health::Quote.format_fields(health_quote)
     	Rails.logger.info "Final Premium= #{chart.premium}"
      results.push( health_quote )
    end
    return results
  end

end
