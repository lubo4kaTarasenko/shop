class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
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
