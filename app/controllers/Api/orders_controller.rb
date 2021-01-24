class Api::OrdersController < ActionController::API
  def create
    json = params.permit(:first_name, :last_name, :email, :phone, :city, :post_office)
    order = Order.create(json)

    product_params = params[:products].map do |p| 
      { product_id: p[:product_id], number: p[:number] }
    end

    order.order_products.create(product_params)
    total = order.order_products.to_a.sum { |op| op.number * op.product.price }
    order.update(total_price: total)

    complete_order

    html = File.read(Rails.root.join('public/index.html').to_s)
    render html: html.html_safe
  end

  def complete_order
    OrderMailer.with(user_email: params[:email]).order_email.deliver_now
  end
end 