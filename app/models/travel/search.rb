class Travel::Search < ActiveRecord::Base
  self.table_name = "travel_searches"
  attr_accessible :id, :age, :location,:travel_cover, :policy_for, :start_date,:end_date, :name, :email_id, :mobile_number, :address, :company_name, :final_premium 
end