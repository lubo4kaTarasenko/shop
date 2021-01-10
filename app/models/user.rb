class User < ApplicationRecord
  has_secure_password

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.freeze

  validates :password, presence: true, length: { minimum: 8, maximum: 50 }, unless: :persisted?

  validates :email, presence: true, length: {
    minimum: 5, maximum: 50
  }, format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }

end
