class CreateTravelCharts < ActiveRecord::Migration
  def change
    create_table :travel_charts do |t|
      t.integer :company_id
      t.integer :coverage
      t.integer :age_start
      t.integer :age_end
      t.string :plan
      t.integer :days
      t.boolean :has_usa
      t.integer :premium

      t.timestamps
    end
  end
end
