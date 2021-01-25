class OrderMailer < ApplicationMailer
  default from: 'shop@example.com'

  def order_email
    @user_email = params[:user_email]
    @order = params[:order]
    mail(to: @user_email, subject: 'Welcome to My Awesome Site')
  end
end
