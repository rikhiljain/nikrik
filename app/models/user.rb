class User < ActiveRecord::Base
  after_create :default_role

  rolify
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :trackable, :validatable,:timeoutable, :authentication_keys => [:login]

  # Setup accessible (or protected) attributes for your model
  attr_accessible :role_ids, :as => :admin
  attr_accessible :mobile, :address, :name, :email, :password, :password_confirmation, :remember_me
  attr_accessible :login

  attr_accessor :login

  validates_uniqueness_of :mobile
  validates_presence_of :mobile, :name

  def self.search(term)
  if(term.nil?)
    term = ""
  end
  term = "%#{term}%"

  where("name like ? or mobile like ? or email like ?",term,term,term)
  end
  
  def self.find_first_by_auth_conditions(warden_conditions)
      conditions = warden_conditions.dup
      if login = conditions.delete(:login)
        where(conditions).where(["lower(mobile) = :value OR lower(email) = :value", { :value => login.downcase }]).first
      else
        where(conditions).first
      end
  end

  def update_tracked_fields!(request)
    super(request) unless self.has_role? :admin
  end

private
  
  def default_role
    unless self.roles.size > 0
      self.roles << Role.where(:name => 'user').first
    end
  end

end
