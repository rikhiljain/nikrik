class Company < ActiveRecord::Base
  self.table_name = "companies"
  
  attr_accessible :name
  has_many :MotorDiscount


end
