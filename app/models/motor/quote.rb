include ActionView::Helpers::NumberHelper

class Motor::Quote
  attr_accessor :company_id,:company_name, :total_premium, :final_premium ,:idv_value, 
  				:base_od, :elec_acc,:non_elec_acc,:bi_fuel_od,:net_od, :anti_theft_dis,:ncb_dis,:aai_dis,:net_dis,
                :base_tp,:bi_fuel_tp,:owner_pa,:passenger_pa,:pad_driver,
                :service_tax, :final_od,:final_tp, :motor_search_id, :user_id, :points

  def initialize
  end
  

  def self.format_fields (motor_quote)

    motor_quote.total_premium = ((motor_quote.total_premium.nil?)? 0 : motor_quote.total_premium.ceil )
    motor_quote.final_premium = ((motor_quote.final_premium.nil?)? 0 : motor_quote.final_premium.ceil )
    motor_quote.service_tax = ((motor_quote.service_tax.nil?)? 0 : motor_quote.service_tax.ceil )
    motor_quote.base_od = ((motor_quote.base_od.nil?)? 0 : motor_quote.base_od.ceil )
    motor_quote.bi_fuel_od = ((motor_quote.bi_fuel_od.nil?)? 0 : motor_quote.bi_fuel_od.ceil )

    motor_quote.ncb_dis = ((motor_quote.ncb_dis.nil?)? 0 : motor_quote.ncb_dis.ceil )
    motor_quote.anti_theft_dis = ((motor_quote.anti_theft_dis.nil?)? 0 : motor_quote.anti_theft_dis.ceil )
    motor_quote.aai_dis = ((motor_quote.aai_dis.nil?)? 0 : motor_quote.aai_dis.ceil )
    motor_quote.net_dis = ((motor_quote.net_dis.nil?)? 0 : motor_quote.net_dis.ceil )

    motor_quote.elec_acc = ((motor_quote.elec_acc.nil?)? 0 : motor_quote.elec_acc.ceil )
    motor_quote.non_elec_acc = ((motor_quote.non_elec_acc.nil?)? 0 : motor_quote.non_elec_acc.ceil )

    motor_quote.final_od = ((motor_quote.final_od.nil?)? 0 : motor_quote.final_od.ceil )
    motor_quote.net_od = ((motor_quote.net_od.nil?)? 0 : motor_quote.net_od.ceil )
    motor_quote.points = ((motor_quote.points.nil?)? 0 : motor_quote.points.ceil )

  end



end