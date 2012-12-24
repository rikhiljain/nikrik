class User < ActiveRecord::Base
  rolify
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :role_ids, :as => :admin
  attr_accessible :mobile, :address, :name, :email, :password, :password_confirmation, :remember_me


  def self.search(term)
  if(term.nil?)
    term = ""
  end
  term = "%#{term}%"

  where("name like ? or mobile like ? or email like ?",term,term,term)
  end
  
end
