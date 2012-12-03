class CreateIdvCharts < ActiveRecord::Migration
  def change
    create_table :idv_charts do |t|
      t.string :maker
      t.string :model
      t.string :subtype
      t.integer :seats
      t.integer :cubic
      t.string  :fuel
      t.integer :age_60_72
      t.integer :age_72_84
      t.integer :age_84_96
      t.integer :age_96
      t.integer :age_0_6
      t.integer :age_12_24
      t.integer :age_24_36
      t.integer :age_36_48
      t.integer :age_48_60
      t.integer :age_6_12
      t.timestamps
    end
  end
end
