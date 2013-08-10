class Travel::Premium < Motor::Premium

def initialize( search)
    @input = search
end

def  calculate_premium

  if (@input.policy_for == 'F')
    return calculate_premium_for_family
  else
   return calculate_premium_for_others
  end

end

def  calculate_premium_for_others
  	results = Array.new

    has_usa = 0
    if (@input.location == 'W')
      has_usa = 1
    end
    #Database is mapped with 50,100...etc.
    @input.travel_cover = @input.travel_cover/1000

    if (@input.trip_type == 'S')
      days = (@input.end_date - @input.start_date).to_i
      travel_charts = Travel::Chart.find_premium_for_single_trip(@input, days, has_usa)
    else
      travel_charts = Travel::Chart.find_premium_for_multiple_trip(@input)
    end

    
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
      travel_quote.points = travel_quote.final_premium * 0.05
      
    	Travel::Quote.format_fields(travel_quote)
     	Rails.logger.info "Final Premium= #{chart.premium}"
      results.push( travel_quote )
    end
    results = results.sort{|p1,p2| p1.final_premium <=> p2.final_premium}
    return results
end


def calculate_premium_for_family

  company_hash = Array.new

  has_usa = 0
  if (@input.location == 'W')
    has_usa = 1
  end
  
  #Database is mapped with 50,100...etc.
  @input.travel_cover = @input.travel_cover/1000

  days = (@input.end_date - @input.start_date).to_i
  

  m_travel_family_TATA( company_hash ,days, has_usa)
  Rails.logger.info "Results  = #{company_hash.to_yaml}"

  m_travel_family_BAJAJ( company_hash, days, has_usa)
  Rails.logger.info "Results = #{company_hash.to_yaml}"

  m_travel_family_ICICI( company_hash, days, has_usa)
  Rails.logger.info "Results = #{company_hash.to_yaml}"

  m_travel_family_RELIANCE( company_hash, days, has_usa)
  Rails.logger.info "Results = #{company_hash.to_yaml}"
  
  company_hash = company_hash.sort{|p1,p2| p1.final_premium <=> p2.final_premium}

  return company_hash

end

def m_travel_family_ICICI( company_hash,days, has_usa )
  
  results = Hash.new
  @input.members.each do |member|
    travel_charts = Travel::Chart.find_premium_for_single_trip_company(@input, member.age, days, has_usa,1)
    travel_charts.each do |chart|
      if results.has_key?(chart.plan)
        results[chart.plan] = results[chart.plan] +  chart.premium
      else
        results[chart.plan] =  chart.premium
      end
    end
  end

  results.each do |key, value|
    travel_quote = Travel::Quote.new
    travel_quote.company_id = 1
    travel_quote.company_name = 'ICICI'
    travel_quote.total_premium = value.to_i 
    travel_quote.final_premium = value.to_i 
    travel_quote.plan = key
    travel_quote.points = travel_quote.final_premium * 0.05
    Travel::Quote.format_fields(travel_quote)
    company_hash.push( travel_quote )
  end

end

def m_travel_family_BAJAJ( company_hash, days, has_usa)
  if has_usa == 1
    return
  end
  premium = 0

  case days
    when 1..15
      premium = 1400
    when 16..30
      premium = 2160
    when 31..60
      premium = 2969
    else
      return
  end

  travel_quote = Travel::Quote.new
  travel_quote.company_id = 2
  travel_quote.company_name = 'BAJAJ'
  travel_quote.total_premium = premium
  travel_quote.final_premium = premium
  travel_quote.plan = 'Travel Family'
  travel_quote.points = travel_quote.final_premium * 0.05
  Travel::Quote.format_fields(travel_quote)
  company_hash.push( travel_quote )
  
end

def m_travel_family_RELIANCE( company_hash ,days, has_usa )
  adults = 0
  childs = 0
  age = 0
  @input.members.each do |member|
    if (member.age > 20)
      adults += 1
    else
      childs +=1
    end
    if ( member.age > age)
      age = member.age
    end
  end

  travel_charts = Travel::Chart.find_premium_for_single_trip_company_members(@input, age, days, has_usa,4,adults,childs)

  travel_charts.each do |chart|
    travel_quote = Travel::Quote.new
    travel_quote.company_id = 4
    travel_quote.company_name = 'RELIANCE'
    travel_quote.total_premium = chart.premium
    travel_quote.final_premium = chart.premium
    travel_quote.plan = chart.plan
    travel_quote.points = travel_quote.final_premium * 0.05
    Travel::Quote.format_fields(travel_quote)
    company_hash.push( travel_quote )
  end

end

def m_travel_family_TATA( company_hash ,days, has_usa)
  results = Hash.new
  @input.members.each do |member|
    travel_charts = Travel::Chart.find_premium_for_single_trip_TATA(@input, member.age, days, has_usa)
    travel_charts.each do |chart|
      if results.has_key?(chart.plan)
        results[chart.plan] = results[chart.plan] +  chart.premium
      else
        results[chart.plan] =  chart.premium
      end
    end
  end
  no_of_members = @input.members.length
  discount = 0
  case no_of_members
    when 0
      discount = 0
    when 1
      discount = 0
    when 2
      discount = 0.05
    when 3
      discount = 0.1
    when 4
      discount = 0.15
    when 5
      discount = 0.175
    else
      discount = 0.20
   end
   Rails.logger.info "TATA Results  = #{results.to_yaml}"

  results.each do |key, value|
    travel_quote = Travel::Quote.new
    travel_quote.company_id = 3
    travel_quote.company_name = 'TATA'
    travel_quote.total_premium = value.to_i * (1 - discount)
    travel_quote.final_premium = value.to_i * (1 - discount)
    travel_quote.plan = key
    travel_quote.points = travel_quote.final_premium * 0.05
    Travel::Quote.format_fields(travel_quote)
    company_hash.push( travel_quote )
  end

end

  def  m_add_result(travel_charts, company_hash)

    travel_charts.each do |chart|

      travel_quote = Travel::Quote.new
      travel_quote.company_id = chart.company_id
      travel_quote.company_name = company_hash[chart.company_id]
      travel_quote.total_premium = chart.premium

      travel_quote.final_premium = chart.premium
      travel_quote.plan = chart.plan
      travel_quote.points = travel_quote.final_premium * 0.05
        
      Travel::Quote.format_fields(travel_quote)
      Rails.logger.info "Final Premium= #{chart.premium}"
      results.push( travel_quote )
    end

  end

end
