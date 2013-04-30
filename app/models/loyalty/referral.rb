class Loyalty::Referral < ActiveRecord::Base
	
self.table_name = "referrals"
attr_accessible :user_id, :email, :mobile, :ref_name,:ref_mobile,:ref_desc, :amount,:points, :status

def self.find_by_user(id)
    where("user_id = ? ", id).order("created_at desc")
end

def self.find_by_status(status)
    where("status = ? ", status).order("created_at desc")
end


end