class CreateMotorPolicies < ActiveRecord::Migration
  def change
    create_table :motor_policies do |t|
      t.integer :policy_id
      t.integer :user_id
      t.integer :company_id
      t.date :start_date
      t.date :end_date
      t.integer :premium
      t.integer :discount
      t.string :policy_path

      t.timestamps
    end
  end
end
