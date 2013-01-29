class Loyalty::Referance < ActiveRecord::Base
	
self.table_name = "referances"
attr_accessible :user_id, :email, :mobile, :ref_name,:ref_mobile,	:ref_desc, :amount, :status

def self.find_by_user(id)
    where("user_id = ? ", id)
end

end