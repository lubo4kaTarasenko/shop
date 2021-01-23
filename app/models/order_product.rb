class OrderProduct < ApplicationRecord
  belongs_to :product
  belongs_to :order

  def name
    product.name
  end
end
