ActiveAdmin.register Product do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :name, :price, :category_id, :description, :country, :url_name, :subcategory_id, :image
  #
  # or
  #
  # permit_params do
  #   permitted = [:name, :price, :category_id, :description, :country, :url_name, :subcategory_id]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
end
