class Motor::Company < ActiveRecord::Base
  set_table_name "companies"
  attr_accessible :name
  has_many :MotorDiscount


end
