class ContactUs < ActiveRecord::Base
  self.table_name = "contact_us"
  
  attr_accessible :product, :message, :name,:mobile,:email, :address

  validates :address, :product, :message, :name,:mobile,:email, :presence => true
  validates :mobile, :numericality => true


end