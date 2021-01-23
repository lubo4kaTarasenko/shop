ActiveAdmin.register Order do

  show do |o|
    attributes_table do
      row :id
      row :city
      row :first_name
      row :last_name
      row :phone
      row :email
      row :post_office
      row :total_price
      
      attributes_table_for o.order_products do
        row :id
        row :name
        row :number
      end
    end
  end
  
end
