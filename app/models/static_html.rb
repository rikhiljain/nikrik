class StaticHtml < ActiveRecord::Base
	self.table_name = "static_htmls"
  	attr_accessible :query_key, :query_value

  def self.find_By_key(key)
    where("query_key = ? ", key )
  end

end
