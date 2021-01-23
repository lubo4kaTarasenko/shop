class Api::OrdersController < ActionController::API
  def create
    json = params.permit(:first_name, :last_name, :email, :phone, :city, :post_office)
    order = Order.create(json)

    product_params = params[:products].map do |p| 
      { product_id: p[:product_id], number: p[:number] }
    end

    order.order_products.create(product_params)

    html = File.read(Rails.root.join('public/index.html').to_s)
    render html: html.html_safe
  end
end