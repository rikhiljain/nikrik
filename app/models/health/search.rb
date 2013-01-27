class Health::Search < ActiveRecord::Base
  self.table_name = "health_searches"
  attr_accessible :id, :adult_age,:heath_cover, :no_of_childs, :policy_for 
end