Rails.application.routes.draw do
  resources :sessions
  root 'sessions#index'
end
