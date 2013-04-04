class Order < ActiveRecord::Base
	self.table_name = "orders"
  	attr_accessible :address, :mobile, :name, :reward_id, :status, :user_id

  	belongs_to :reward

  	validates :address, :mobile, :name, :presence => true
  	validates :mobile, :numericality => true

end
