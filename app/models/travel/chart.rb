class Travel::Chart < ActiveRecord::Base
	self.table_name = "travel_charts"
  attr_accessible :age_end, :age_start, :company_id, :coverage, :days, :has_usa, :plan, :premium


  def self.find_by_coverage_age(cover,age, days,has_usa)
    where("coverage = ? AND age_start <= ? and age_end >= ? and days = ? and has_usa = ? ", cover, age,age,days, has_usa)
  end
end
