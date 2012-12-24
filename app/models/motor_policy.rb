class MotorPolicy < ActiveRecord::Base
  attr_accessible :company_id, :discount, :end_date, :policy_id, :policy_path, :premium, :start_date, :user_id
  belongs_to :company
  belongs_to :user

  validates :policy_id, :presence => true
  validates :premium, :presence => true
  validates :discount, :presence => true
  validates :company_id, :presence => true
  validates :user_id, :presence => true

  def self.to_hash(motor_policy)
    hash = { :company_id => motor_policy.company_id,
             :discount => motor_policy.discount,
             :end_date => motor_policy.end_date,
             :policy_id => motor_policy.policy_id,
             :policy_path => motor_policy.policy_path,
             :premium => motor_policy.premium,
             :start_date => motor_policy.start_date,
             :user_id => motor_policy.user_id
            }
  end
end
