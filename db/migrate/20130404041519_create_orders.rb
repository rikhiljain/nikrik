class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :reward_id
      t.integer :user_id
      t.string :name
      t.string :mobile
      t.string :address
      t.string :status

      t.timestamps
    end
  end
end
