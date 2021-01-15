class AddNewColumnsToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :description, :text
    add_column :products, :country, :string
  end
end
