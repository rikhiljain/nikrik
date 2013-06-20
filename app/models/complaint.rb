class Complaint < ActiveRecord::Base
  self.table_name = "complaints"
  
  attr_accessible :subject, :product, :message, :name,:mobile,:email

  validates :product, :message, :name, :presence => true
 

end