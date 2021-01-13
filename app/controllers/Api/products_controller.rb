class Api::ProductsController < ActionController::API
  def index
    products =  Product.search(params[:q]).includes(:category).page(params[:p]).map do |p| 
      p.attributes.merge( 
        category: p.category.name
      ) 
    end
    render json: { products: products }
  end
end
