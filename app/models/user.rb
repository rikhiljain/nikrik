class User < ActiveRecord::Base
  after_create :default_role

  rolify
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :omniauthable, :registerable,
         :recoverable, :trackable, :validatable,:timeoutable, :authentication_keys => [:login],
         :omniauth_providers => [:facebook,:google_oauth2]

  # Setup accessible (or protected) attributes for your model
  attr_accessible :role_ids, :as => :admin
  attr_accessible :mobile, :address, :name, :email, :password, :password_confirmation, :remember_me
  attr_accessible :login
  attr_accessible :provider, :uid

  attr_accessor :login

  validates_presence_of :name

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

def self.find_for_facebook_oauth(auth, signed_in_resource=nil)
  user = User.where("email = ? ", auth.info.email).first
  #user = User.where(:provider => auth.provider, :uid => auth.uid).first
  unless user
    user = User.create(name:auth.info.name,
                         provider:auth.provider,
                         uid:auth.uid,
                         email:auth.info.email,
                         address:auth.info.location,
                         password:Devise.friendly_token[0,20]
                         )
    return user
  end
  if (user.provider.blank? ||  user.provider != auth.provider)
    #Update provider details in the database
    user.update_attributes( :provider => auth.provider, :uid => auth.uid )
  end
  return user
end 

def self.find_for_google_oauth2(access_token, signed_in_resource=nil)
  #user = User.where(:provider => access_token.provider, :uid => access_token.uid).first
  user = User.where("email = ? ", access_token.info.email).first
  unless user
    user = User.create(name:access_token.info.name,
                         provider:access_token.provider,
                         uid:access_token.uid,
                         email:access_token.info.email,
                         password:Devise.friendly_token[0,20]
                         )
    return user
  end
  if (user.provider.blank? ||  user.provider != access_token.provider)
    #Update provider details in the database
    user.update_attributes( :provider => access_token.provider, :uid => access_token.uid )
  end
  return user
end

def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
        user.email = data["email"] if user.email.blank?
        user.name = data["name"] if user.name.blank?
      end
      if data = session["devise.google_data"] && session["devise.google_data"]["extra"]["raw_info"]
        user.email = data["email"] if user.email.blank?
        user.name = data["name"] if user.name.blank?
      end
    end
end

end
