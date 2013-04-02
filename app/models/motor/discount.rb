class Motor::Discount < ActiveRecord::Base
  self.table_name = "motor_discounts"

  attr_accessible :company_id, :idv_chart_id, :rto_id, :dis_year_0, :dis_year_1, :dis_year_2, :dis_year_3,:dis_year_4,:dis_year_5,:dis_year_6,:dis_year_7,:dis_year_8
  belongs_to :company,  :class_name => 'Company'

  belongs_to :idv_chart
  belongs_to :rto, :class_name => 'Motor::Rto' 

  validates :company_id, :idv_chart_id, :presence => true
  
  def self.get_discount(idv_chart_id,company_id,rto_id)
    where("idv_chart_id = ? and company_id = ? and rto_id in (0,?) ",idv_chart_id,company_id,rto_id).order("rto_id desc").first
  end

  def self.find_by_company(company_id)
    where("company_id = ?",company_id).order("rto_id desc")
  end

end
