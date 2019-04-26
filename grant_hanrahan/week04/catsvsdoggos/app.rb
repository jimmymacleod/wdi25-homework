require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'deathmatch.db'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

# 1 - animal
# Many - admirers - animal_id added to admirers

class Cat < ActiveRecord::Base
  # belongs_to :doggos
  has_many :doggos
  # has_many :doggos as enemies
end

class Doggo < ActiveRecord::Base
  # has_many :cats
  belongs_to :cat
  # belongs_to :animal 1 cat fren
end

# def db_query( sql )
#
#   #make a connection to our sqlite3 database
#   db = SQLite3::Database.new 'cats.db'
#
#   # ask the gem to format the query results as a hash
#   db.results_as_hash = true
#
#   puts
#   puts sql
#   puts
#
#   # execute a SQL query and return the result
#   result = db.execute sql
#   db.close
#
#   result
# end

get '/home' do
  erb :home
end

post '/cats' do
  Cat.create(
    name: params[:name],
    evilness: params[:evilness],
    description: params[:description],
    victims: params[:victims],
    image_url: params[:image_url]
  )
    redirect "/cats"
end

get '/cats' do
  @result = Cat.all
  erb :cats_index
end

get '/cats/new' do
  erb :cats_new
end

get '/cats/:id' do
  @cat = Cat.find params[:id]
  erb :cats_show
end

get '/cats/:id/edit' do
  @cat = Cat.find params[:id]
  erb :cats_edit
end

post '/cats/:id' do
  cat = Cat.find params[:id]
  cat.update(
  name: params[:name],
  evilness: params[:evilness],
  description: params[:description],
  victims: params[:victims],
  image_url: params[:image_url]
)

  redirect "/cats/#{cat.id}"
end

get '/cats/:id/delete' do
  Cat.destroy params[:id]
  redirect "/cats"
end

#############################

get '/home' do
  erb :home
end

post '/doggos' do
  Doggo.create(
    name: params[:name],
    description: params[:description],
    game: params[:game],
    image_url: params[:image_url],
    cat_id: params[:cat_id]
  )
  # binding.pry
    redirect "/doggos"
end

get '/doggos' do
  @result = Doggo.all
  erb :doggos_index
  # binding.pry
end

get '/doggos/new' do
  erb :doggos_new
end

get '/doggos/:id' do
  @doggo = Doggo.find params[:id]
  erb :doggos_show
  # binding.pry
end

get '/doggos/:id/edit' do
  @doggo = Doggo.find params[:id]
  erb :doggos_edit
end

post '/doggos/:id' do
  doggo = Doggo.find params[:id]
  doggo.update(
  name: params[:name],
  description: params[:description],
  game: params[:game],
  image_url: params[:image_url],
  cat_id: params[:cat_id]
)
  # binding.pry
  redirect "/doggos/#{doggo.id}"
end

get '/doggos/:id/delete' do
  Doggo.destroy params[:id]
  redirect "/doggos"
end
