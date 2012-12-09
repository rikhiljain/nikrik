class MotorDiscount < ActiveRecord::Base
  attr_accessible :amount, :company_id, :idv_chart_id, :rto_code, :rto_sub_code
  belongs_to :company
end
