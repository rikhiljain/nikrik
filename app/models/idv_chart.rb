class IdvChart < ActiveRecord::Base
  attr_accessible :maker, :model,:subtype, :seats, :cubic, :fuel, :age_60_72, :age_72_84, :age_84_96,
                  :age_96, :age_0_6, :age_12_24, :age_24_36, :age_36_48, :age_48_60, :age_6_12
end
