class Travel::Chart < ActiveRecord::Base
	self.table_name = "travel_charts"
  attr_accessible :company_id, :policy_for,:trip_type,:max_trip_duration, :age_end, :age_start, :coverage, :duration_start,:duration_end, :has_usa, :plan, :adult, :child, :premium


  def self.find_premium_for_single_trip( input, days, has_usa)
    where("coverage = ? AND age_start <= ? and age_end >= ? and duration_start <= ? and duration_end >= ? and has_usa = ? and policy_for = ? and trip_type = 'S' ", input.travel_cover, input.age, input.age, days,days, has_usa, input.policy_for).order("company_id")
  end

  def self.find_premium_for_multiple_trip( input)
    where("coverage = ? AND age_start <= ? and age_end >= ? and max_trip_duration = ? and policy_for = 'I' and trip_type = 'M' ", input.travel_cover, input.age, input.age, input.max_trip_duration ).order("company_id")
  end
  
  def self.find_by_company(company_id)
    where("company_id = ?", company_id)
  end

  def self.find_premium_for_single_trip_company( input, age, days, has_usa,company_id)
    where("coverage = ? AND age_start <= ? and age_end >= ? and duration_start <= ? and duration_end >= ? and has_usa = ? and policy_for = ? and trip_type = 'S' and company_id = ? ", input.travel_cover, age, age, days,days, has_usa, input.policy_for,company_id)
  end

  def self.find_premium_for_single_trip_company_members( input, age, days, has_usa,company_id, adult, child)
    where("coverage = ? AND age_start <= ? and age_end >= ? and duration_start <= ? and duration_end >= ? and has_usa = ? and policy_for = ? and trip_type = 'S' and company_id = ? and adult = ? and child= ? ", input.travel_cover, age, age, days,days, has_usa, input.policy_for,company_id,adult,child)
  end

  def self.find_premium_for_single_trip_TATA( input, age, days, has_usa)
    where("coverage = ? AND age_start <= ? and age_end >= ? and duration_start <= ? and duration_end >= ? and has_usa = ? and trip_type = 'S' and company_id = 3 and plan in ( 'Silver', 'Silver Plus' ) ", input.travel_cover, age, age, days,days, has_usa)
  end

end
