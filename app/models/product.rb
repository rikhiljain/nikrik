class Product < ActiveRecord::Base
  attr_accessible :details, :end_date, :image_name, :name, :points, :start_date, :status
end
