class Motor::Discount < ActiveRecord::Base
  set_table_name "motor_discounts"
  attr_accessible :amount, :company_id, :idv_chart_id, :rto_id
  belongs_to :company
  belongs_to :idv_chart
  belongs_to :rto

  validates :amount, :company_id, :idv_chart_id, :presence => true
  validates :amount, :numericality => true

  def self.get_discount(idv_chart_id,company_id,rto_id)
    where("idv_chart_id = ? and company_id = ? and rto_id in (0,?)",idv_chart_id,company_id,rto_id).order("rto_id desc").first
  end
end
