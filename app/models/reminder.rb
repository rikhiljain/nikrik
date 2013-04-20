class Reminder < ActiveRecord::Base
  attr_accessible :day, :email, :insurer_name, :mobile, :month, :name, :policy_type, :remarks, :user_id
end
