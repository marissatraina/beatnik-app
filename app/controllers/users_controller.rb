class UsersController < ApplicationController

  def spotify
    auth = request.env['omniauth.auth']
    session[:auth] = auth
    redirect_to users_index_path
  end

  def index
    auth_username = session[:auth]['uid']
    @spotify_user = RSpotify::User.find(auth_username)
    render '/player/index'
  end

  def playlist_player
    auth_username = session[:auth]['uid']
    @spotify_user = RSpotify::User.find(auth_username)
    @index = index_params[:index]
    @index
    render :partial => '/player/player', locals: { index: @index, spotify_user: @spotify_user }
  end

  def visual_selector
    # binding.pry
    if params[:visual] == 'sine'
      render :partial => '/visuals/sine'
    elsif params[:visual] == 'vines'
      render :partial => '/visuals/vines'
    end
  end

  def index_params
    params.permit(:index)
  end 

end