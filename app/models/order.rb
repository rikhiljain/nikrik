class Order < ActiveRecord::Base
	self.table_name = "orders"
  	attr_accessible :address, :mobile, :name, :reward_id, :status, :user_id

  	belongs_to :reward

  	validates :address, :mobile, :name, :presence => true
  	validates :mobile, :numericality => true

  	def self.find_by_user( user_id)
  		where( "user_id = ?" , user_id).order( " created_at desc" )
  	end

end