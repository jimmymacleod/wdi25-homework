class MountainsController < ApplicationController

  def new
  end

  def create
    mountain = Mountain.new

    mountain.name = params[:name]
    mountain.location = params[:location]
    mountain.size = params[:size]
    mountain.image = params[:image]

    mountain.save

    redirect_to mountains_path

  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]

    mountain.update(
      name: params[:name],
      location: params[:location],
      size: params[:size],
      image: params[:image]
    )

    redirect_to mountain_path(mountain.id)

  end

  def index
    @mountains = Mountain.all
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def destroy
    Mountain.destroy params[:id]

    redirect_to( mountains_path )
  end

end

end
