class CreateHealthCharts < ActiveRecord::Migration
  def change
    create_table :health_charts do |t|
      t.integer :coverage
      t.integer :age_start
      t.integer :age_end
      t.integer :premium

      t.timestamps
    end
  end
end
