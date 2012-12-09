class CreateRtos < ActiveRecord::Migration
  def change
    create_table :rtos do |t|
      t.string :code
      t.string :sub_code
      t.string :city
      t.string :state

      t.timestamps
    end
  end
end
