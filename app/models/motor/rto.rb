class Motor::Rto < ActiveRecord::Base
  set_table_name "rtos"
  attr_accessible :city, :code, :state, :sub_code

  validates :city,:state,:code, :presence => true

end
