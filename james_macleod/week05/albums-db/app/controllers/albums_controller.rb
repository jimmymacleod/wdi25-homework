class AlbumsController < ApplicationController

  def index
    @albums = Album.all
  end

  def show
    @album = Album.find params[:id]
  end

  def new
  end

  def create
    album = Album.new

    album.name = params[:name]
    album.image = params[:image]
    album.year = params[:year]
    album.tracks = params[:tracks]
    album.link = params[:link]

    album.save

    redirect_to '/albums'
  end

  def delete
    Album.destroy params[:id]
    redirect_to '/albums'
  end

  def edit
     @album = Album.find params[:id]
  end

  def update
    album = Album.find params[:id]

    album.update(
    name: params[:name],
    image: params[:image],
    year: params[:year],
    tracks: params[:tracks],
    link: params[:link]
  )

  redirect_to '/albums'

  end


end
