class Loyalty::Reward < ActiveRecord::Base
	
self.table_name = "rewards"
attr_accessible :user_id, :ref_type, :ref_id, :points, :status,:exp_dt

def self.find_by_user(id)
    where("user_id = ? ", id)
end

end
