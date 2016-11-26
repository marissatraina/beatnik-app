class UsersController < ApplicationController

  def spotify
    auth = request.env['omniauth.auth']
    session[:auth] = auth
    redirect_to users_index_path
  end

  def index
    auth_username = session[:auth]['info']['uid']
    @spotify_user = RSpotify::User.find(auth_username)
    binding.pry
    render '/player/index'
  end

end