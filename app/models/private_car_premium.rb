class PrivateCarPremium < Premium

  owner_pa = 100

 # matrix for zone-B car rating
  # 0 means year less than 5 and 4 means for thrid party
 ratingZoneB = { 0 => { 1000 => 3.039, 1500 => 3.191,  2000 =>3.343} ,
                 1 => { 1000 => 3.191, 1500 => 3.351, 2000 =>3.51},
                2 => { 1000 => 3.267, 1500 => 3.43, 2000 =>3.594},
                4 => { 1000 => 670, 1500 => 800, 2000 =>2500}}
 # matrix for zone-A car rating
 ratingZoneA = { 0 => { 1000 => 3.127, 1500 => 3.283,  2000 =>3.44} ,
                 1 => { 1000 => 3.283, 1500 => 3.447, 2000 =>3.612},
                 2 => { 1000 => 3.362, 1500 => 3.529, 2000 =>3.698},
                 4 => { 1000 => 670, 1500 => 800, 2000 =>2500}}

  def initialize

  end

  def  calculate_premium
    @idvValue = IdvChart.find_by_maker_model_subtype('AUDI','A4','1.8 TFSI')

    total_premium =   calculate_od_premium +   calculate_tp_premium
    total_premium = total_premium + calculate_service_tax(total_premium)

    return total_premium
  end

 private
  def calculate_od_premium
    age = 5



    carValue = @idvValue.age_60_72

    #calculate zone
    rating =  ratingZoneA[0][1500]

    basic_od = (idvValue * rating) / 100

    ncb_discount = (basicOD * 25) / 100

    od_premium = basic_od - ncb_discount

    return od_premium
  end

  def calculate_tp_premium
    basic_tp =   ratingZoneA[4][1500]

    passanger_insurance =100000

    basic_tp = basic_tp + owner_pa + (passanger_insurance/2000) * 5

    return basic_tp
  end


end