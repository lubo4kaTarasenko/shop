Rails.application.routes.draw do
  devise_for :users
  get '/products', to: 'api/products#index'
  get '/product', to: 'api/products#show'
  get '/categories', to: 'api/categories#index'

  root = 'home#index'

  root to: root
  get '/:Warriors', to: root
  get '/:Unforgiven/:Two', to: root
  get '/:Back/:In/:Black', to: root
  get '/:Born/:To/:Be/:Wild', to: root
  get '/:Rock/:To/:Like/:a/:Hurricane', to: root
  get '/:I/:Was/:Made/:For/:Lovin/:You', to: root
end
