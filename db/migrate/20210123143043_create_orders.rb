class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :first_name
      t.string :last_name
      t.string :city
      t.string :email
      t.string :phone
      t.string :post_office
      t.integer :total_price

      t.timestamps
    end
  end
end
