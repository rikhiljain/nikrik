class Company < ActiveRecord::Base
  self.table_name = "companies"
  
  attr_accessible :name, :is_health, :is_motor, :is_travel
  has_many :MotorDiscount


end
