class CreateReminders < ActiveRecord::Migration
  def change
    create_table :reminders do |t|
      t.string :name
      t.string :email
      t.string :mobile
      t.string :policy_type
      t.string :insurer_name
      t.integer :day
      t.string :month
      t.string :remarks
      t.integer :user_id

      t.timestamps
    end
  end
end
