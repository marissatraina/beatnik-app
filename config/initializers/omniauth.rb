# config/initializers/omniauth.rb

require 'rspotify/oauth'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, "7042b0891f7f4341a1998f27090b58a4", "38a444663f5845bc98c8637ef478372a", scope: 'user-read-email playlist-modify-public user-library-read user-library-modify'
end