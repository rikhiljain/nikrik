class Order < ActiveRecord::Base
	self.table_name = "orders"
  	attr_accessible :address, :mobile, :name, :reward_id, :status, :user_id, :points, :desc
  	
  	def self.find_by_user( user_id)
  		where( "user_id = ?" , user_id).order( " created_at desc" )
  	end

end
