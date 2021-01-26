class User < ApplicationRecord
  has_many :comments
 
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  after_create :create_token

  private

  def create_token
    token = (0..99).to_a.sample(5).join
    self.token = token
    save
  end
end
