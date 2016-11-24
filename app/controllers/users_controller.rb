class UsersController < ApplicationController

  def spotify
    auth = request.env['omniauth.auth']
    auth_username = auth['info']['nickname']
    @spotify_user = RSpotify::User.find(auth_username)
    binding.pry
    # spotify_user = RSpotify::User.new(request.env['omniauth.auth'])
    # Now you can access user's private data, create playlists and much more
    # me = RSpotify::User.find('guilhermesad')
    # binding.pry
    # Access private data
    # spotify_user.country #=> "US"
    # spotify_user.email   #=> "example@email.com"

    # Create playlist in user's Spotify account
    # playlist = spotify_user.create_playlist!('my-awesome-playlist')

    # # Add tracks to a playlist in user's Spotify account
    # tracks = RSpotify::Track.search('Know')
    # # playlist.add_tracks!(tracks)
    # # playlist.tracks.first.name #=> "Somebody That I Used To Know"

    # # Access and modify user's music library
    # spotify_user.save_tracks!(tracks)
    # spotify_user.saved_tracks.size #=> 20
    # spotify_user.remove_tracks!(tracks)

    # albums = RSpotify::Album.search('launeddas')
    # spotify_user.save_albums!(albums)
    # spotify_user.saved_albums.size #=> 10
    # spotify_user.remove_albums!(albums)

    # # Use Spotify Follow features
    # spotify_user.follow(playlist)
    # spotify_user.follows?(artists)
    # spotify_user.unfollow(users)

    # # Get user's top played artists and tracks
    # spotify_user.top_artists #=> (Artist array)
    # spotify_user.top_tracks(time_range: 'short_term') #=> (Track array)

    # Check doc for more

    render 'player/index'
  end

end