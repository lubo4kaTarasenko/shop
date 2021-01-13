class Api::ProductsController < ActionController::API
  def index
    products_filtred =  Product.search(params[:q]).includes(:category)
    pages_count = (products_filtred.count / 24).ceil
    products = Product.search(params[:q]).includes(:category).page(params[:p]).per(24).map do |p| 
      p.attributes.merge( 
        category: p.category.name
      ) 
    end
    render json: { products: products, pages: pages_count }
  end
end
