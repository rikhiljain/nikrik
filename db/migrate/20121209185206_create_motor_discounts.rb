class CreateMotorDiscounts < ActiveRecord::Migration
  def change
    create_table :motor_discounts do |t|
      t.integer :idv_chart_id
      t.integer :company_id
      t.float :amount
      t.integer :rto_id

      t.timestamps
    end
  end
end
