class PolicyAttribute < ActiveRecord::Base
  attr_accessible :attrib_name, :attrib_value, :company_id, :plan, :policy_type
  belongs_to :company,  :class_name => 'Company'
end
