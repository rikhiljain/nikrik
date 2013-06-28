class Travel::Member < ActiveRecord::Base
  self.table_name = "travel_members"
  attr_accessible :id, :relationship, :age, :search_id
  belongs_to :travel_search , :class_name => "Travel::Search"
end