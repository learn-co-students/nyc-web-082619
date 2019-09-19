class MusiciansController < ApplicationController
  def index
    @musicians = Musician.all
  end

  def show
    @musician = Musician.find(params[:id])
  end

  def new
    @musician = Musician.new
  end

  def create
    musician = Musician.create(musician_params)
    redirect_to musician_path(musician)
    
    # "/musicians/#{musician.id}"
    # musician_path(musician) #=> "/musicians/#{musician.id}"
  end

  def edit
    @m = Musician.find(params[:id])
  end

  def update
    musician = Musician.find(params[:id])
    musician.update(musician_params)
    redirect_to "/musicians/#{musician.id}"
  end

  def destroy
  end

  def ofAge
    @musicians = Musician.ofAge
  end



  private 

  def musician_params
    params.require(:musician).permit(:name, :age, :label)
  end
 

end
