class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.string :details
      t.integer :points
      t.string :image_name
      t.string :status
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
  end
end
