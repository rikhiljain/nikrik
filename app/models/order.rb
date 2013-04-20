class Order < ActiveRecord::Base
	self.table_name = "orders"
  	attr_accessible :address, :mobile, :name, :reward_id, :status, :user_id, :points, :desc, :order_num
  	
  	def self.find_by_user( user_id)
  		where( "user_id = ?" , user_id).order( " created_at desc" )
  	end

 	def get_reward
 		Reward.find(reward_id)
 	end

end
