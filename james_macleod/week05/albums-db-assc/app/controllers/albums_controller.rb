class AlbumsController < ApplicationController

    def home
    end

    def index
      @albums = Album.all
    end

    def show
      @album = Album.find params[:id]
      # if @album.artist_id.present?
      #   @artist = Artist.find(@album.artist_id)
      # end
  
    end

    def new
      @album = Album.new
    end

    def create
      Album.create album_params
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
      album.update album_params
      redirect_to '/albums'
    end

  private

    def album_params
      params.require(:album).permit(:name, :image, :year, :tracks, :link, :artist_id)
    end

end
