class Api::ProductsController < ActionController::API
  def index
    products =  Product.all.includes(:category).map do |p| 
      p.attributes.merge(
        name: p.name,
        price: p.price,
        category: p.category.name
      ) 
    end
    render json: { products: products }
  end
end