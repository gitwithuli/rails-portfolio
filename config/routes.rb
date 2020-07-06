Rails.application.routes.draw do
  root to: 'pages#home'
  get '/about', to: 'pages#about'
  get '/contact', to: 'pages#contact'
  get '/hood', to: 'pages#hood'
  get '/cocktail', to: 'pages#cocktail'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
