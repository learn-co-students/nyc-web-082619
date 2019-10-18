class Api::V1::GamesController < ApplicationController
  def index
    games = Game.all

    render json: games # tells the action what to send back to the requester and in what format
    # a little bit like a return
  end

  def show
    game = Game.find(params[:id])

    render json: {game: GameSerializer.new(game), message: "sup fam"}
  end


  def update
    game = Game.find(params[:id])

    game.update(likes: params[:likes])

    render json: game
  end

  def create
    game = Game.new(game_params)

    if game.save
      render json: game
    else
      render json: {errors: game.errors.full_messages}, status: 403
    end
  end

  private

  def game_params
    params.require(:game).permit(:name, :description, :img_url, :likes)
  end
end
