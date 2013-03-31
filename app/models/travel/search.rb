class Travel::Search < ActiveRecord::Base
  self.table_name = "travel_searches"
  attr_accessible :id, :policy_for, :trip_type,:max_trip_duration, :age, :location,:travel_cover, :start_date,:end_date, :name, :email_id, :mobile_number, :address, :company_name,:plan, :final_premium 
end