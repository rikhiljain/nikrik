class Motor::CarPremium < Motor::Premium

  # matrix[Age][Cubic] for zone-B car rating and matrix[4] use for third party
  ZONE_B_RATING = { 0 => { 0 => 3.039, 1 => 3.191,  2 =>3.343} ,
                 1 => { 0 => 3.191, 1 => 3.351, 2 =>3.51},
                2 => { 0 => 3.267, 1 => 3.43, 2 =>3.594},
                4 => { 0 => 941, 1 => 1110, 2 =>3424}}

 #matrix[Age][Cubic] for zone-A car rating and matrix[4] use for third party
 ZONE_A_RATING = { 0 => { 0 => 3.127, 1 => 3.283,  2 =>3.44} ,
                 1 => { 0 => 3.283, 1 => 3.447, 2 =>3.612},
                 2 => { 0 => 3.362, 1 => 3.529, 2 =>3.698},
                 4 => { 0 => 941, 1 => 1110, 2 =>3424}}

  def initialize( motorSearch)
      @input = motorSearch
  end

  def  calculate_premium

    results = Array.new
    @idv_chart = Motor::IdvChart.find(@input.idv_chart_id)

    idv_value = m_motor_value
    base_od = m_base_premium(idv_value)

    #total_premium = m_total_premium(MotorQuote.new, base_od, 0)
    Rails.logger.info "Base OD = #{base_od}"
    companies = Company.find_motor_company()

    companies.each do |company|
      motor_quote = Motor::Quote.new
      motor_quote.idv_value = idv_value
      motor_quote.company_id = company.id
      motor_quote.company_name = company.name

      motor_discount = Motor::Discount.get_discount(@idv_chart.id, company.id,@input.rto_id)

      discount = (base_od * m_get_discount( motor_discount) )/100
      Rails.logger.info "Discount= #{discount}"

      final_premium = m_total_premium(motor_quote, base_od, discount)
      motor_quote.points = final_premium * 0.02
 
      Motor::Quote.format_fields(motor_quote)
      Rails.logger.info "Final Premium= #{final_premium}"
      results.push( motor_quote )

    end
    results = results.sort{|p1,p2| p1.final_premium <=> p2.final_premium} 

    return results
  end

  def m_get_discount( motor_discount)

    if motor_discount.nil?
      return 0
    end
    age_in_years = m_motor_age_in_years()
    Rails.logger.info "age_in_years= #{age_in_years}"

    case age_in_years
     when 0
        motor_discount.dis_year_0
     when 1
        motor_discount.dis_year_1
     when 2
        motor_discount.dis_year_2
     when 3
        motor_discount.dis_year_3
     when 4
        motor_discount.dis_year_4
     when 5
        motor_discount.dis_year_5
     when 6
        motor_discount.dis_year_6
     when 7
        motor_discount.dis_year_7
     when 8
        motor_discount.dis_year_8
     else
        motor_discount.dis_year_8
   end

  end


  def m_total_premium(motor_quote, base_od, discount_amount)

      base_od_after_discount = base_od - discount_amount

      motor_quote.base_od = base_od_after_discount
      
      motor_quote.elec_acc = m_elec_acc
      motor_quote.non_elec_acc = m_non_elec_acc
      motor_quote.bi_fuel_od = m_bi_fuel_od(base_od_after_discount)

      net_od = base_od_after_discount + motor_quote.elec_acc  + motor_quote.non_elec_acc + motor_quote.bi_fuel_od 
      motor_quote.net_od = net_od

      motor_quote.anti_theft_dis = m_anti_theft_discount(net_od)
      net_od = net_od - motor_quote.anti_theft_dis

      motor_quote.aai_dis = m_aai_discount(net_od)
      net_od = net_od - motor_quote.aai_dis

      motor_quote.ncb_dis = m_ncb_amount(net_od)

      motor_quote.net_dis = motor_quote.anti_theft_dis + motor_quote.aai_dis + motor_quote.ncb_dis
      final_od = net_od - motor_quote.ncb_dis

      motor_quote.final_od = final_od

      motor_quote.base_tp = m_basic_tp
      motor_quote.bi_fuel_tp = m_bi_fuel_tp
      motor_quote.owner_pa = m_owner_pa
      motor_quote.passenger_pa  = m_passenger_pa
      motor_quote.pad_driver = m_pad_driver

      final_tp =  motor_quote.base_tp + motor_quote.bi_fuel_tp + 
                  motor_quote.owner_pa + motor_quote.passenger_pa + motor_quote.pad_driver 

      motor_quote.final_tp = final_tp

      total_premium = final_od + final_tp
      motor_quote.total_premium = total_premium

      motor_quote.service_tax = calculate_service_tax(total_premium)
      motor_quote.final_premium = total_premium + motor_quote.service_tax

    return motor_quote.final_premium
  end

  def m_motor_age_in_years
    now = Date.today
    age_in_years =  now.year - @input.register_date.year
     #Need to check boundary condition
    if  (now.month+2) < @input.register_date.month
       age_in_years -= 1
    end
    return age_in_years
  end

  def m_base_premium(idv_value)

   now = Date.today
   age_in_years =  now.year - @input.register_date.year
   #Need to check boundary condition
   if  now.year.month < @input.register_date.month
     age_in_years -= 1
   end

   case age_in_years
     when 0..5
       index_x = 0
     when 6..10
       index_x = 1
     else
       index_x = 2
   end

   case @idv_chart.cubic
     when 0..1000
       index_y = 0
     when 1001..1500
       index_y = 1
     else
       index_y = 2
   end

   if  @input.rto_id == 1 or  @input.rto_id == 2
     (ZONE_A_RATING[index_x][index_y] * idv_value)/100
   else
     (ZONE_B_RATING[index_x][index_y] * idv_value)/100
   end

 end

 def m_motor_value
  now = Date.today
  age_in_months =  12 * (now.year -  @input.register_date.year) + now.month - @input.register_date.month
  case age_in_months
     when 0..5
       @idv_chart.age_0_6
     when 6..11
       @idv_chart.age_6_12
     when 12..23
       @idv_chart.age_12_24
     when 24..35
       @idv_chart.age_24_36
     when 36..47
       @idv_chart.age_36_48
     when 48..59
       @idv_chart.age_48_60
     when 60..71
       @idv_chart.age_60_72
     when 72..83
       @idv_chart.age_72_84
     when 84..95
       @idv_chart.age_84_96
     else
       @idv_chart.age_96
   end

 end

 def m_anti_theft_discount(base_od)
    discount = 0
    if @input.has_anti_theft
      discount = base_od * 0.025
      if discount > 500
        discount = 500
      end
    end
    return discount
  end

  def m_aai_discount(base_od)
    discount = 0
    if @input.has_anti_theft
      discount = base_od * 0.025
      if discount > 200
        discount = 200
      end
    end
    return discount;
  end

 def  m_bi_fuel_od(net_od)
   extra_charge = 0
   if @input.cng_type != '' 
     #for Factory fitted CNG
     if @input.cng_type == 'FF_CNG' || @input.cng_type == 'FF_LPG'
        extra_charge = net_od * 0.05
     else
        extra_charge = ((@input.cng_value?)?@input.cng_value : 0) * 0.04
     end
   end
   return extra_charge
 end

 def m_elec_acc
   ((@input.elec_acc?)?@input.elec_acc : 0) * 0.04
 end

 def m_non_elec_acc 
  ((@input.non_elec_acc?)?@input.non_elec_acc : 0) * 0.04
 end

  def m_ncb_amount(final_od)
     if (@input.has_claim || @input.new_policy )
       return 0
     end
     new_ncb = 0
     case ((@input.ncb?)?@input.ncb : 0)
       when 0
        new_ncb = 20
       when 20
         new_ncb =25
       when 25
         new_ncb = 35
       when 35
         new_ncb = 45
       when 45
         new_ncb = 50
       when 50
         new_ncb = 50
       when 65
         new_ncb = 65
     end
      return (final_od * new_ncb)/100
   end


  
  def m_basic_tp
    case @idv_chart.cubic
      when 0..1000
        index_y = 0
      when 1001..1500
        index_y = 1
      else
        index_y = 2
    end

    #Metro cities are in Zone A
    if  @input.rto_id == 1 or  @input.rto_id == 2
      ZONE_A_RATING[4][index_y]
    else
      ZONE_B_RATING[4][index_y]
    end
  end

  def m_owner_pa
    if @input.register_type == 'I'
      100
    else
      0
    end
  end

  def m_passenger_pa
    per_person_pa = ((@input.passenger_coverage_amt?)?@input.passenger_coverage_amt : 0 )/2000
    total_pa = per_person_pa * @idv_chart.seats
  end

  def m_bi_fuel_tp
   if @input.cng_type.nil? or @input.cng_type.empty?
     return 0
   else
     return 60
   end
  end

  def m_pad_driver
    50
  end

end