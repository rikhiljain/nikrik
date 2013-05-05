class PolicyAttribute < ActiveRecord::Base
  attr_accessible :attrib_name, :attrib_value, :company_id, :plan, :policy_type, :order_num
  belongs_to :company,  :class_name => 'Company'

  def self.find_By_policy_type( policy_type)
    where("policy_type = ? ", policy_type ).order("order_num asc, company_id asc")
  end

end
