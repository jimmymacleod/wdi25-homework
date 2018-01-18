class ArtistsController < ApplicationController

    def home
    end

    def index
      @artists = Artist.all
    end

    def show
      @artist = Artist.find params[:id]
    end

    def new
      @artist = Artist.new
    end

    def create
      Artist.create artist_params
      redirect_to '/artists'
    end

    def delete
      Artist.destroy params[:id]
      redirect_to '/artists'
    end

    def edit
      @artist = Artist.find params[:id]
    end

    def update
      artist = Artist.find params[:id]
      artist.update artist_params
      redirect_to '/artists'
    end

  private

    def artist_params
      params.require(:artist).permit(:name, :nationality, :genre, :twitter, :image)
    end


end
