class Company < ActiveRecord::Base
  self.table_name = "companies"
  
  attr_accessible :name, :is_health, :is_motor, :is_travel
  has_many :MotorDiscount

  def self.find_motor_company()
	    where(" is_motor = 1")
  end

   def self.find_health_company()
	    where(" is_health = 1")
  end

   def self.find_travel_company()
	    where(" is_travel = 1")
  end

end
