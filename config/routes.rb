Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
  get '/products', to: 'api/products#index'
  get '/product', to: 'api/products#show'
  get '/categories', to: 'api/categories#index'
  post '/order', to: 'api/orders#create'

  post '/comments', to: 'api/comments#create'
  delete '/comments', to: 'api/comments#destroy'
  put '/comments', to: 'api/comments#update'

  root = 'home#index'

  root to: root
  get '/:Warriors', to: root
  get '/:Unforgiven/:Two', to: root
  get '/:Back/:In/:Black', to: root
  get '/:Born/:To/:Be/:Wild', to: root
  get '/:Rock/:To/:Like/:a/:Hurricane', to: root
  get '/:I/:Was/:Made/:For/:Lovin/:You', to: root
end
