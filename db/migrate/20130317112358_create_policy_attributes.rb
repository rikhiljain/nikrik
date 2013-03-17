class CreatePolicyAttributes < ActiveRecord::Migration
  def change
    create_table :policy_attributes do |t|
      t.integer :company_id
      t.string :policy_type
      t.string :plan
      t.string :attrib_name
      t.string :attrib_value

      t.timestamps
    end
  end
end
