class SessionsController < ApplicationController

	def index
		# binding.pry
		if session[:auth]
			redirect_to users_index_path
		end
	end

  def destroy
  	# binding.pry
  	session.clear
    request.env['omniauth.auth'] = nil
  	redirect_to root_url
  end

end
