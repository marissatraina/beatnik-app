Rails.application.routes.draw do
  get '/auth/spotify/callback', to: 'users#spotify'
  resources :sessions
  
  root 'sessions#index'
end
