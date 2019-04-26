class PlacesController < ApplicationController

  # CRUD: CREATE

  def new
  end

  def create

    # create a new Place object, all fields blank
    place = Place.new

    # populate the fields from the submitted form data in params
    place.name = params[:name]
    place.location = params[:location]
    place.image = params[:image]
    place.description = params[:description]
    place.rating = params[:rating]


    # the changes to the object above are not saved to the database with .save:
    place.save

    # no template for a create action, just redirect to index
    redirect_to( places_path )   # parens are not 'idiomatic Ruby'
  end


  # CRUD: READ

  def index
    @places = Place.all
  end

  def show
    @place = Place.find params[:id]
  end



  def edit

    @place = Place.find params[:id]
  end

  def update

    place = Place.find params[:id]

    place.update(
      name: params[:name],
      location: params[:location],
      image: params[:image],
      description: params[:description],
      rating: params[:rating]

    )

    redirect_to place_path( place.id )
  end



  def destroy
    Place.destroy params[:id]
    redirect_to( places_path )
  end

end
