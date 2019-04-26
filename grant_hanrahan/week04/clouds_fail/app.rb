require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'

def db_query( sql )

  #make a connection to our sqlite3 database
  db = SQLite3::Database.new 'clouds.db'

  # ask the gem to format the query results as a hash
  db.results_as_hash = true

  puts
  puts sql
  puts

  # execute a SQL query and return the result
  result = db.execute sql
  db.close

  result
end

get '/home' do
  erb :home
end

post '/clouds' do
  sql = "INSERT INTO clouds (shape, color, image_url, size)
  VALUES(
    '#{params[:shape]}',
    '#{params[:color]}',
    '#{params[:image_url]}',
     #{params[:size]}
    );"
    db_query sql

    redirect "/clouds"

  # params.inspect
end

get '/clouds' do

  @cloud = db_query( "SELECT * FROM clouds;" )
  erb :index

end

get '/clouds/new' do
  erb :new
end

get '/clouds/:id' do

    id = params[:id]
    result = db_query "SELECT * FROM clouds WHERE id = #{id};"
    @cloud = result.first

    # binding.pry
    erb :show
end

get '/clouds/:id/edit' do
  id = params[:id]
  result = db_query "SELECT * FROM clouds WHERE id = #{id};"
  @cloud = result.first

  erb :edit
end

post '/clouds/:id' do
  id = params[:id]
  sql = %Q( UPDATE clouds SET
  '#{params[:shape]}',
  '#{params[:color]}',
  '#{params[:image_url]}',
   #{params[:size]}
  WHERE id = #{id}; )

  db_query sql

  redirect "/clouds/#{id}"
end

get '/clouds/:id/delete' do
  db_query "DELETE FROM clouds WHERE id = #{params[:id]};"
  redirect "/clouds"
end
