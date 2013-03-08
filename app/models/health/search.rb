class Health::Search < ActiveRecord::Base
  self.table_name = "health_searches"
  attr_accessible :id, :adult_age,:heath_cover, :no_of_childs, :policy_for, :name, :email_id, :mobile_number, :address, :company_name, :final_premium 
end