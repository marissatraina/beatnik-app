Rails.application.routes.draw do
  get '/auth/spotify/callback', to: 'users#spotify'
  get '/users/index', to: 'users#index'
   get '/playlist', to: 'users#playlist_player'
  resources :sessions
  
  root 'sessions#index'
end
