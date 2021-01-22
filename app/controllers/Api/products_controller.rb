class Api::ProductsController < ActionController::API
 
  #def current_user
   # if Rails.env.development?
      #User.last
    #else
      #super
   # end
 # end

  def index
    scp = get_list
    products = scp.page(params[:p]).per(24).map do |p|
      p.attributes.merge(
        category: p.category.name,
        subcategory: p.subcategory.name
      )
    end

    pages_count = (scp.count / 24).ceil
    Rails.logger.info("user:" + current_user.inspect)
    if current_user
      user = {
        token: current_user.token,
        email: current_user.email
      }
    end
    render json: { products: products, pages: pages_count, user: user }
  end

  def show
    product = Product.find_by(url_name: params[:name])
    render json: { product: product }
  end

  def get_list
    price_from = params[:pr_f]
    price_to = params[:pr_t]
    scp = Product.search(params[:q]).includes(:category).includes(:subcategory)
    scp = scp.where('price >= ?', price_from.to_f) if price_from.present? && price_from != 'undefined'
    scp = scp.where('price <= ?', price_to.to_f)  if price_to.present? && price_to != 'undefined'    

    if params[:sc].present? && params[:sc] != 'undefined'
      scp = scp.where(subcategory_id: Subcategory.find_by(name: params[:sc]).id) 
    else
      scp = scp.where(category_id: params[:c].to_i) if params[:c].present? && params[:c] != 'undefined'
    end

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
