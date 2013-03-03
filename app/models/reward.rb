class Reward < ActiveRecord::Base
  self.table_name = "rewards"
  attr_accessible :details, :end_date, :image_name, :name, :points, :start_date, :status

def self.find_active_rewards()
    where("(start_date is null or start_date <= ?) AND (end_date is null or end_date >= ?)", Time.now, Time.now)
end

end
