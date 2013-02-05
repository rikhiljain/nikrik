class Loyalty::Point < ActiveRecord::Base
	
self.table_name = "points"
attr_accessible :user_id, :ref_type, :ref_id, :value, :status,:exp_dt

def self.find_by_user(id)
    where("user_id = ? ", id)
end

end
