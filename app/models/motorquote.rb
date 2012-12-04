class Motorquote < ActiveRecord::Base
	def self.columns() @columns ||= []; end
 
  	def self.column(name, sql_type = nil, default = nil, null = true)
    	columns << ActiveRecord::ConnectionAdapters::Column.new(name.to_s, default, sql_type.to_s, null)
  	end
  column :car_make, :string
  column :car_model, :string
  column :previous_policy_exp_date, :date
  column :new_policy, :boolean
  column :year_of_manufacture, :date
  
  
end
