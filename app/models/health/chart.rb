class Health::Chart < ActiveRecord::Base
	self.table_name = "health_charts"
  attr_accessible :company_id,:plan, :age_end, :age_start,:adults, :childs, :coverage, :premium

  def to_s
    "HealthChart: #{@comapny_id}--#{@age_end} (#{@coverage})"
  end

  def self.find_by_coverage_age(heath_cover, age)
    where("coverage = ? AND age_start <= ? and age_end >= ? ", heath_cover, age, age)
  end

  def self.find_by_company(company_id)
    where("company_id = ?", company_id)
  end

end
