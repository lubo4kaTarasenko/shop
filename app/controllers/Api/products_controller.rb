class Api::ProductsController < ActionController::API
  def index
    scp = get_list
    products = scp.page(params[:p]).per(24).map do |p|
      p.attributes.merge(
        category: p.category.name
      )
    end

    pages_count = (scp.count / 24).ceil
    render json: { products: products, pages: pages_count }
  end

  def show
    product = Product.find_by(url_name: params[:name])
    render json: { product: product }
  end

  def get_list
    price_from = params[:pr_f]
    price_to = params[:pr_t]

    scp = Product.search(params[:q]).includes(:category)
    scp = scp.where('price >= ?', price_from.to_f) if price_from.present? && price_from != 'undefined'
    scp = scp.where('price <= ?', price_to.to_f)  if price_to.present? && price_to != 'undefined'
    scp = scp.where(category_id: params[:c].to_i) if params[:c].present? && params[:c] != 'undefined'

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
