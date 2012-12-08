class CreateMotorSearches < ActiveRecord::Migration
  def change
    create_table :motor_searches do |t|
      t.boolean :new_policy
      t.date :policy_exp_date
      t.date :year_of_manufacture
      t.integer :idv_chart_id
      t.string :register_city
      t.boolean :transfer_ncb
      t.integer :ncb
      t.integer :elec_acc
      t.integer :non_elec_acc
      t.boolean :cng_kit
      t.integer :cng_kit_value
      t.integer :passenger_coverage_amt
      t.integer :voluntary_excess
      t.boolean :has_anti_theft
      t.boolean :aai_member

      t.timestamps
    end
  end
end
