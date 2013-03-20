class Complaint < ActiveRecord::Base
  self.table_name = "complaints"
  
  attr_accessible :subject, :product, :message, :name,:mobile,:email

  validates :subject, :product, :message, :name,:mobile,:email, :presence => true
  validates :mobile, :numericality => true


end