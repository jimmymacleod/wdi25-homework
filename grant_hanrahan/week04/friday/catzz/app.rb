require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'

def db_query( sql )

  #make a connection to our sqlite3 database
  db = SQLite3::Database.new 'cats.db'

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

post '/cats' do
  sql = "INSERT INTO cats(first_name, last_name, grumpiness, image_url)
  VALUES(
    '#{params[:first_name]}',
    '#{params[:last_name]}',
    '#{params[:grumpiness]}',
    '#{params[:image_url]}'
    );"
    db_query sql

    redirect "/cats"

  # params.inspect
end

get '/cats' do

  @result = db_query( "SELECT * FROM cats;" )
  erb :index

end

get '/cats/new' do
  erb :new
end

get '/cats/:id' do

    id = params[:id]
    result = db_query "SELECT * FROM cats WHERE id = #{id};"
    @cat = result.first

    # binding.pry
    erb :show
end

get '/cats/:id/edit' do
  id = params[:id]
  result = db_query "SELECT * FROM cats WHERE id = #{id};"
  @cat = result.first

  erb :edit
end

post '/cats/:id' do
  id = params[:id]
  sql = %Q( UPDATE cats SET
  first_name = "#{params[:first_name]}",
  last_name = "#{params[:last_name]}",
  grumpiness = "#{params[:grumpiness]}",
  image_url = "#{params[:image_url]}"
  WHERE id = #{id}; )

  db_query sql

  redirect "/cats/#{id}"
end

get '/cats/:id/delete' do
  db_query "DELETE FROM cats WHERE id = #{params[:id]};"
  redirect "/cats"
end
