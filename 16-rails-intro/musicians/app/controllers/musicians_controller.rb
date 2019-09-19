class MusiciansController < ApplicationController
  def index
    @musicians = Musician.all
  end

  def show
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def ofAge
    @musicians = Musician.ofAge
    
  end

end
