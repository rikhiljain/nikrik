class MotorDiscount < ActiveRecord::Base
  attr_accessible :amount, :company_id, :idv_chart_id, :rto_code, :rto_sub_code
  belongs_to :company


  def self.get_discount(idv_chart_id,company_id)
    where("idv_chart_id = ? and company_id = ? ",idv_chart_id,company_id).first

  end
end
