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
    @musician = Musician.new(musician_params)
    if @musician.save 
    redirect_to musician_path(@musician)
    else
      # send the user some message
      flash.now[:message] = @musician.errors.full_messages[0]
      # byebug
      render :new
    end
  end

  def edit
    @musician = Musician.find(params[:id])
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
    strongParams = params.require(:musician).permit(:name, :age, :label)
    byebug
    strongParams
  end
 

end
