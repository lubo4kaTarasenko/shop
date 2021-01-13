class Api::ProductsController < ActionController::API
  def index
    scp = get_list
    products = scp.page(params[:p]).per(24).map do |p| 
      p.attributes.merge( 
        category: p.category.name
      ) 
    end

    pages_count = ((scp.count) / 24).ceil
    render json: { products: products, pages: pages_count }
  end

  def get_list
    scp = Product.search(params[:q]).includes(:category)
    
    if params[:f] == 'A...Z'
      scp = scp.order(name: :asc)
    elsif params[:f] == 'Z...A'
      scp = scp.order(name: :desc)
    elsif params[:f] == 'cheap...expensive'
      scp = scp.order(price: :asc)
    elsif params[:f] == 'expensive...cheap'
      scp = scp.order(price: :desc)
    else
      scp
    end 
    scp
  end
end
