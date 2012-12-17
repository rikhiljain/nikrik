class CarPremium < Premium

 # matrix[Age][Cubic] for zone-B car rating and matrix[4] use for third party
  ZONE_B_RATING = { 0 => { 0 => 3.039, 1 => 3.191,  2 =>3.343} ,
                 1 => { 0 => 3.191, 1 => 3.351, 2 =>3.51},
                2 => { 0 => 3.267, 1 => 3.43, 2 =>3.594},
                4 => { 0 => 784, 1 => 925, 2 =>2853}}

 #matrix[Age][Cubic] for zone-A car rating and matrix[4] use for third party
 ZONE_A_RATING = { 0 => { 0 => 3.127, 1 => 3.283,  2 =>3.44} ,
                 1 => { 0 => 3.283, 1 => 3.447, 2 =>3.612},
                 2 => { 0 => 3.362, 1 => 3.529, 2 =>3.698},
                 4 => { 0 => 784, 1 => 925, 2 =>2853}}

  def initialize( motorSearch)
      @input = motorSearch
  end

  def  total_premium
    Rails.logger.info "Calculating Total premium for = #{@input}"
    results = Array.new
    @idv_chart = IdvChart.find(@input.idv_chart_id)

    initial_od = initial_premium

    companies = Company.all

    companies.each do |company|

      discount = MotorDiscount.get_discount(@idv_chart.id, company.id)

      discount_amount = (initial_od * ((discount.nil?)? discount.amount : 0) )/100

      base_od = initial_od - discount_amount

      net_od = base_od - anti_theft_discount(base_od)
      final_od = net_od + additional_coverage(net_od)

      final_od = final_od + ncb_amount(final_od)

      total_premium = final_od + tp_premium

      total_premium += calculate_service_tax(total_premium)

      results.push(MotorQuote.new(company.id, company.name, total_premium,discount_amount))

    end

    return results

  end



 def initial_premium

   now = Date.today
   age_in_years =  now.year - @input.year_of_manufacture.year
   #Need to check boundary condition
   if  now.year.month < @input.year_of_manufacture.month
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

   if  @input.register_city == 'DL' or  @input.register_city == 'MB'
     (ZONE_B_RATING[index_x][index_y] * motor_value)/100
   else
     (ZONE_A_RATING[index_x][index_y] * motor_value)/100
   end

 end

 def motor_value
   now = Date.today
   age_in_months =  12 * (now.year -  @input.year_of_manufacture.year) + now.month - @input.year_of_manufacture.month

   case age_in_months
     when 0..6
       @idv_chart.age_0_6
     when 7..12
       @idv_chart.age_6_12
     when 13..24
       @idv_chart.age_12_24
     when 25..36
       @idv_chart.age_24_36
     when 37..48
       @idv_chart.age_36_48
     when 49..60
       @idv_chart.age_48_60
     when 61..72
       @idv_chart.age_60_72
     when 73..84
       @idv_chart.age_72_84
     when 85..96
       @idv_chart.age_84_96
     else
       @idv_chart.age_96
   end

 end

 def anti_theft_discount(base_od)
    discount = base_od * 0.025
    if discount > 500
      discount = 500
    end
  end

 def  additional_coverage(net_od)
   extra_charge = 0.0
   #for Factory fitted CNG
   if @input.cng_type == ''
      extra_charge = net_od * 0.05
   else
      extra_charge = @input.cng_value * 0.05
   end

   extra_charge +=  (@input.elec_acc + @input.non_elec_acc) * 0.04
 end

   def ncb_amount(final_od)
     if @input.has_claim
       return 0
     end
     new_ncb = 0
     case @inout.ncb
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


  def tp_premium
     basic_tp + owner_pa + passenger_pa  + cng_tp
  end

  def basic_tp
    case @idv_chart.cubic
      when 0..1000
        index_y = 0
      when 1001..1500
        index_y = 1
      else
        index_y = 2
    end

    if  @input.register_city == 'DL' or  @input.register_city == 'MB'
      ZONE_B_RATING[4][index_y]
    else
      ZONE_A_RATING[4][index_y]
    end
  end

  def owner_pa
    100
  end

  def passenger_pa
    per_person_pa = @input.passenger_coverage_amt/2000
    total_pa = per_person_pa * @idv_chart.seats
  end

  def cng_tp
   if @input.cng_type != ''
     return 60
   else
     return 0
   end
  end


end