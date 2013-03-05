class Travel::Chart < ActiveRecord::Base
	self.table_name = "travel_charts"
  attr_accessible :age_end, :age_start, :company_id, :coverage, :days, :has_usa, :plan, :premium
end
