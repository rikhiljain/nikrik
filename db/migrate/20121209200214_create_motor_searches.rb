class CreateMotorSearches < ActiveRecord::Migration
  def change
    create_table :motor_searches do |t|
      t.boolean :new_policy
      t.date :policy_exp_date
      t.integer :year_of_manufacture
      t.integer :idv_chart_id
      t.string :register_type
      t.date :register_date
      t.string :register_city
      t.boolean :has_claim
      t.integer :ncb
      t.integer :elec_acc
      t.integer :non_elec_acc
      t.string :cng_type
      t.integer :cng_value
      t.integer :passenger_coverage_amt
      t.boolean :has_anti_theft
      t.boolean :is_aai_member
      t.boolean :has_full_cover

      t.timestamps
    end
  end
end
