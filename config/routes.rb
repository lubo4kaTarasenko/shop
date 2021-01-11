Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/products', to: 'api/products#index'
  get '/categories', to: 'api/categories#index'
end
