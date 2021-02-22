Rails.application.routes.draw do
  root to: 'home#index'
  get '/', to: 'home#index'
  get '/create', to: 'home#index'
  get '/edit/:id', to: 'home#index'
  resources :books, only:[:index]

  namespace :api do
    resources :books
  end
end
