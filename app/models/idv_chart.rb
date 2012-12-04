class IdvChart < ActiveRecord::Base
  attr_accessible :age_0_6, :age_12_24, :age_24_36, :age_36_48, :age_48_60, :age_60_72, :age_6_12, :age_72_84, :age_84_96, :age_96, :cubic, :fuel, :maker, :model, :seats, :subtype
end
