class MotorSearch < ActiveRecord::Base
  attr_accessible :cng_type, :cng_value, :elec_acc, :has_anti_theft, :has_claim, :idv_chart_id, :is_aai_member, :ncb, :new_policy, :non_elec_acc, :passenger_coverage_amt, :policy_exp_date, :register_city, :register_type, :year_of_manufacture
end
