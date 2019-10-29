class ScreamsController < ApplicationController
  def index
    screams = Scream.all

    render json: screams
  end
end
