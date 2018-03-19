class PlayersController < ApplicationController
	def new
  		
  	end

  	def create
		render plain: params[:player].inspect
		@player = Player.new(player_params)

		@player.save
		# redirect_to @player
  	end

  	private
		def player_params
			params.require(:player).permit(:name, :age)
		end
end
