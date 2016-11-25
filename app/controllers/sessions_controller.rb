class SessionsController < ApplicationController

	def index
		# redirect if user is already logged in
		if session[:auth]
			redirect_to users_index_path
		end
	end

  def destroy
  	session.clear
  	redirect_to 'sessions#index'
  end

end
