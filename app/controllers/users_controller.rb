class UsersController < ApplicationController

  def spotify
    auth = request.env['omniauth.auth']
    session[:auth] = auth
    redirect_to users_index_path
  end

  def index
    auth_username = session[:auth]['uid']
    @spotify_user = RSpotify::User.find(auth_username)
    @first_playlist = @spotify_user.playlists[0] || ""
    @album_art_on_load = @first_playlist.tracks[0].album.images[0]["url"] || "" 
    render '/player/index'
  end

  def playlist_player
    auth_username = session[:auth]['uid']
    @spotify_user = RSpotify::User.find(auth_username)
    @index = index_params[:index]
    @current_playlist = @spotify_user.playlists[@index.to_i].name
    render :partial => '/player/player', locals: { index: @index, spotify_user: @spotify_user }
  end

  def visual_selector
    visual = params[:visual]
    if visual == "space-record"
      render :partial => '/visuals/spacerecord'
    elsif visual == "midnight-feather"
      render :partial => '/visuals/midnightfeather'
    elsif visual == "exploding-sun"
      render :partial => '/visuals/explodingsun'
    end
  end

  def index_params
    params.permit(:index)
  end

end
