class CarPremium < Premium

 # matrix[Age][Cubic] for zone-B car rating and matrix[4] use for third party
 ratingZoneB = { 0 => { 0 => 3.039, 1 => 3.191,  2 =>3.343} ,
                 1 => { 0 => 3.191, 1 => 3.351, 2 =>3.51},
                2 => { 0 => 3.267, 1 => 3.43, 2 =>3.594},
                4 => { 0 => 670, 1 => 800, 2 =>2500}}

 #matrix[Age][Cubic] for zone-A car rating and matrix[4] use for third party
 ratingZoneA = { 0 => { 0 => 3.127, 1 => 3.283,  2 =>3.44} ,
                 1 => { 0 => 3.283, 1 => 3.447, 2 =>3.612},
                 2 => { 0 => 3.362, 1 => 3.529, 2 =>3.698},
                 4 => { 0 => 670, 1 => 800, 2 =>2500}}

  def initialize( motorSearch)
      @input = motorSearch
  end

  def  self.total_premium
    total_premium = od_premium + tp_premium
    total_premium += calculate_service_tax(total_premium)
  end

  def self.od_premium
        basic_od
  end



  def self.tp_premium
     basic_tp + owner_pa + passenger_pa
  end

  def self.motor_value
    @idv_chart = IdvChart.find_by_sql("select * from idv_charts where idv_chart_id=?", @input.idv_chart_id)

    now = Date.today
    age_in_months =  12 * (now.year -  @idv_chart.year_of_manufacture.year) + now.month - @idv_chart.year_of_manufacture.month

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

  def self.basic_od

    now = Date.today
    age_in_years =  now.year - @idv_chart.year_of_manufacture.year
    #Need to check boundary condition
    if  now.year.month < @idv_chart.year_of_manufacture.month
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

    if  @idv_chart.register_city == 'DL' or  @idv_chart.register_city == 'MB'
      (ratingZoneB[index_x][index_y] * motor_value)/100
    else
      (ratingZoneA[index_x][index_y] * motor_value)/100
    end

  end


  def self.basic_tp
    case @idv_chart.cubic
      when 0..1000
        index_y = 0
      when 1001..1500
        index_y = 1
      else
        index_y = 2
    end

    if  @idv_chart.register_city == 'DL' or  @idv_chart.register_city == 'MB'
      ratingZoneB[4][index_y]
    else
      ratingZoneA[4][index_y]
    end
  end

  def self.owner_pa
    100
  end

  def self.passenger_pa
    per_person_pa = @input.passenger_coverage_amt/2000
    total_pa = per_person_pa * @idv_chart.seats
  end




end