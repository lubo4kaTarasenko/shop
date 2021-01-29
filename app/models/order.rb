class Order < ApplicationRecord
  has_many :order_products
  has_many :products, through: :order_products
  # belongs_to :user

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.freeze
  validates :email, presence: true, length: {
    minimum: 5, maximum: 50 }, format: { with: VALID_EMAIL_REGEX }
end
