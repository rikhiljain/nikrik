class Rto < ActiveRecord::Base
  attr_accessible :city, :code, :state, :sub_code

  validates :city,:state,:code, :presence => true

end
