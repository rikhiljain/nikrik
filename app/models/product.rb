class Product < ActiveRecord::Base
  attr_accessible :details, :end_date, :image_name, :name, :points, :start_date, :status

def self.find_active_products()
    where("start_date <= ? AND end_date <= ?", Time.now, Time.now)
end

end
