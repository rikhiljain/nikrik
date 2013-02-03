class Policy < ActiveRecord::Base
  self.table_name = "policies"
  
  attr_accessible :policy_type, :company_id, :discount, :end_date, :policy_id, :policy_path, :premium, :start_date, :user_id
  belongs_to :company
  belongs_to :user

  validates :policy_id, :presence => true
  validates :premium, :presence => true
  validates :discount, :presence => true
  validates :company_id, :presence => true
  validates :user_id, :presence => true
  validates :discount,:premium, :numericality => true
  validate :start_date_cannot_be_in_the_future, :end_date_cannot_be_in_the_past

  def start_date_cannot_be_in_the_future
    if !start_date.blank? and start_date > Date.today
      errors.add(:start_date, "can't be in the future")
    end
  end

  def end_date_cannot_be_in_the_past
    if !end_date.blank? and end_date <= Date.today
      errors.add(:end_date, "can't be in the past")
    end
  end

  def self.to_hash(policy)
    hash = { :company_id => policy.company_id,
             :discount => policy.discount,
             :end_date => policy.end_date,
             :policy_id => policy.policy_id,
             :policy_path => policy.policy_path,
             :premium => policy.premium,
             :start_date => policy.start_date,
             :user_id => policy.user_id
            }
  end
end
