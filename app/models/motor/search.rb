class Motor::Search < ActiveRecord::Base
  self.table_name = "motor_searches"

  attr_accessible :id, :cng_type, :cng_value, :elec_acc, :has_anti_theft, :has_claim, :idv_chart_id, :is_aai_member, 
  					:ncb, :new_policy, :non_elec_acc, :passenger_coverage_amt, :policy_exp_date, :has_full_cover,
  :rto_id, :register_date, :register_type, :year_of_manufacture, 
  :name, :email_id, :mobile_number, :address, :company_name, :final_premium
end
