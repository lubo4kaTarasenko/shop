class AddImageToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :image, :string, default: 'https://res.cloudinary.com/dmqyv6xea/image/upload/v1611501893/shop/ava_ijli5n.jpg'
  end
end
