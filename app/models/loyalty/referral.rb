class Loyalty::Referral < ActiveRecord::Base
	
self.table_name = "referrals"
attr_accessible :user_id, :email, :mobile, :ref_name,:ref_mobile,:ref_desc, :amount, :status

def self.find_by_user(id)
    where("user_id = ? ", id)
end

def self.find_by_status(status)
    where("status = ? ", status)
end


end