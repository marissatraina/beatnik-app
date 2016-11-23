class SessionsController < ApplicationController

	def index
	end

  def create
  end

  def destroy
  	session.clear
  	redirect_to 'sessions#index'
  end

end
