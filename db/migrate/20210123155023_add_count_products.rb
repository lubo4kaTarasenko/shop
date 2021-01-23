class AddCountProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :order_products, :number, :integer, default: 1
  end
end
