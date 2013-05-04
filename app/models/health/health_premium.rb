class Health::HealthPremium < Motor::Premium

def initialize( search)
      @input = search
  end

  def  calculate_premium
  	results = Array.new
   
    case @input.policy_for
     when 1 #self
        adults =1
        childs =0
        age =@input.adult_age
     when 2 #Parents
        adults =2
        childs =0
        if ( @input.father_age > @input.mother_age)
          age =@input.father_age
        else
          age =@input.mother_age
        end
     when 3 #Self Plus Spouse Plus Childrens
         adults =2
         childs = @input.no_of_childs
         age =@input.adult_age
     when 4 #Self Plus Childrens
         adults =1
         childs = @input.no_of_childs
         age =@input.adult_age
     else
        adults =1
        childs =0
        age = -1
   end

    health_charts = Health::Chart.find_by_coverage_age(@input.health_cover, age, adults, childs)
   
    company_hash = {}
    Company.all.each do |company|
      company_hash[company.id] = company.name
    end

    health_charts.each do |chart|

    	health_quote = Health::Quote.new
    	health_quote.company_id = chart.company_id
      health_quote.company_name = company_hash[chart.company_id]
      health_quote.plan = chart.plan
    	health_quote.total_premium = chart.premium
    	
      #health_quote.service_tax = calculate_service_tax(health_quote.total_premium)
      health_quote.final_premium = health_quote.total_premium
    	
      health_quote.points = health_quote.final_premium * 0.05

    	Health::Quote.format_fields(health_quote)
     	Rails.logger.info "Final Premium= #{chart.premium}"
      results.push( health_quote )
    end
    return results
  end

end
