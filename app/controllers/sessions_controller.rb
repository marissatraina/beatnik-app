class SessionsController < ApplicationController

	def index
	end

  def destroy
  	session.clear
  	redirect_to root_url
  end

end
