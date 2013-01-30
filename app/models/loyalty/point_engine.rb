class Loyalty::PointEngine < ActiveRecord::Base


	def self.calculate(premium, user_id)
		debugger
		user_type = ''
		unless user_id.nil?
			user = User.find(user_id)
			user_type = '' #will implement the logic of differnt type of users
		end

		# 5% of final premium amount
		points = premium.to_i * 0.05
		
		return points
	end

end
