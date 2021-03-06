class Motor::IdvChart < ActiveRecord::Base
  self.table_name = "idv_charts"
  
  attr_accessible :age_0_6, :age_12_24, :age_24_36, :age_36_48, :age_48_60, :age_60_72, :age_6_12, :age_72_84, :age_84_96, :age_96, :cubic, :fuel, :maker, :model, :seats, :subtype


  def to_s
    "IdvChart: #{@maker}--#{@model} (#{@subtype})"
  end

  def self.find_by_maker_model_subtype(maker, model, subtype)
    where("maker = ? AND model = ? AND subtype = ?", maker, model, subtype).first
  end

  def self.get_makers()
    Rails.cache.fetch("#{self.class.name}:manufacturers"){
           select(:maker).uniq
     }
  end
  
  def self.get_models(manufacturer)
    Rails.cache.fetch("#{self.class.name}:"+manufacturer+":models"){
	     idv_chart = where("maker = ?", manufacturer).all
     }
  end

  def self.find_by_maker(maker)
    where("maker = ?", maker).all
  end

  def self.find_by_maker_model_subtype(maker, model,subtype)
    model = '0' unless model.nil?
    subtype = '0' unless subtype.nil?
    
    where("maker = ? and IFNULL(model, '0') and IFNULL(subtype, '0') ", maker,model, subtype).all
  end

  def self.motor_value(idv_chart_id, year_of_manufacture)
    idv_chart = where("id = ?", idv_chart_id).first
    now = Date.today
    age_in_months =  12 * (now.year -  year_of_manufacture.year) + now.month - year_of_manufacture.month
    case age_in_months
     when 0..5
       idv_chart.age_0_6
     when 6..11
       idv_chart.age_6_12
     when 12..23
       idv_chart.age_12_24
     when 24..35
       idv_chart.age_24_36
     when 36..47
       idv_chart.age_36_48
     when 48..59
       idv_chart.age_48_60
     when 60..71
       idv_chart.age_60_72
     when 72..83
       idv_chart.age_72_84
     when 84..95
       idv_chart.age_84_96
     else
       idv_chart.age_96
    end
  end

  def self.find_one(id)
     Rails.cache.fetch("#{self.class.name}:"+id){
      super
     }
  end


end
