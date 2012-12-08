class CreateMotorDiscounts < ActiveRecord::Migration
  def change
    create_table :motor_discounts do |t|
      t.integer :idv_chart_id
      t.interger :company_id
      t.float :amount

      t.timestamps
    end
  end
end
