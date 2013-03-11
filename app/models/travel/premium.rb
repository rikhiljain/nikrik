class Travel::Premium < Motor::Premium

def initialize( search)
      @input = search
  end

  def  calculate_premium
  	results = Array.new

    days = (@input.end_date - @input.start_date).to_i
    Rails.logger.info "Days= #{days}"
    has_usa = 0
    if (@input.location == 'W')
      has_usa = 1
    end
    #Database is mapped with 50,100...etc.
    @input.travel_cover = @input.travel_cover/1000

    travel_charts = Travel::Chart.find_by_coverage_age(@input.travel_cover, @input.age, days,has_usa)
    
    Rails.logger.info "Charts = #{travel_charts.to_yaml}"

    company_hash = {}
    Company.all.each do |company|
      company_hash[company.id] = company.name
    end

    travel_charts.each do |chart|

    	travel_quote = Travel::Quote.new
    	travel_quote.company_id = chart.company_id
      travel_quote.company_name = company_hash[chart.company_id]
    	travel_quote.total_premium = chart.premium

    	travel_quote.final_premium = chart.premium
    	travel_quote.plan = chart.plan
    	Travel::Quote.format_fields(travel_quote)
     	Rails.logger.info "Final Premium= #{chart.premium}"
      results.push( travel_quote )
    end
    return results
  end

end
