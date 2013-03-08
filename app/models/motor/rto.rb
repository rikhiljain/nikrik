class Motor::Rto < ActiveRecord::Base
  self.table_name = "rtos"
  
  attr_accessible :city, :code, :state, :sub_code

  validates :city,:state,:code, :presence => true

end
