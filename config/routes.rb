Rails.application.routes.draw do
  scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
  root to: 'pages#home'
  get '/about', to: 'pages#about'
  get '/contact', to: 'pages#contact'
  get '/hood', to: 'pages#hood'
  get '/cocktail', to: 'pages#cocktail'
  get '/herha_adoption', to: 'pages#herha_adoption'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  end
end
