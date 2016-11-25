class SessionsController < ApplicationController

	def index
		if session[:auth]
			redirect_to users_index_path
		end
	end

  def create
  end

  def destroy
  	session.clear
  	redirect_to 'sessions#index'
  end

end
