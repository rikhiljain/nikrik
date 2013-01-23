class CreatePolicyTypes < ActiveRecord::Migration
  def change
    create_table :policy_types do |t|
      t.string :name

      t.timestamps
    end
  end
end
