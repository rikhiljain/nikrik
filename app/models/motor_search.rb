class MotorSearch < ActiveRecord::Base
  attr_accessible :id, :cng_type, :cng_value, :elec_acc, :has_anti_theft, :has_claim, :idv_chart_id, :is_aai_member, :ncb, :new_policy, :non_elec_acc, :passenger_coverage_amt, :policy_exp_date, 
  :register_city, :register_type, :year_of_manufacture, :email_id, :mobile_number, :address, :company_name, :total_premium, :discount, :final_premium
end
