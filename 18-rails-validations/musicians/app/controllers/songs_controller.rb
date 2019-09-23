class SongsController < ApplicationController
  def new
    @song = Song.new
    @musicians = Musician.all
  end
end
