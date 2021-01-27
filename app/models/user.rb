class User < ApplicationRecord
  has_many :comments
 
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,  :omniauthable

  after_create :create_token

  private

  def create_token
    token = (0..99).to_a.sample(5).join
    self.token = token
    save
  end

  def self.from_omniauth(auth)  
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.password_confirmation = user.password
    end
  end
end
