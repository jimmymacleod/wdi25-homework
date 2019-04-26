require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'

def db_query ( bch )
  db = SQLite3::Database.new 'beaches.db'
  db.results_as_hash = true
  puts
  puts
  puts bch
  puts
  puts
  result = db.execute bch

  db.close
  result
end

get '/home' do
  erb :home
end

post '/beaches' do
  sql = "INSERT INTO beaches( beach_name , location , image_url, description, reviews, likes)
  VALUES(
    '#{params[:beach_name]}' ,
    '#{params[:location]}' ,
    '#{params[:image_url]}' ,
    '#{params[:description]}' ,
    '#{params[:reviews]}' ,
    #{params[:likes]}

    );"
    db_query sql

    redirect "/beaches"
end


get '/beaches' do
  @result = db_query "SELECT * FROM beaches;"
  erb :index
end



get '/beaches/new' do
  erb :new
end


get '/beaches/:id' do
  id = params[:id]
  result = db_query "SELECT * FROM beaches where id = #{id};"

  @beach = result.first
  erb :show


end

get '/beaches/:id/edit' do
  id = params[:id]
  result = db_query "SELECT * FROM beaches where id = #{id};"

  @beach = result.first

  erb :edit

end

post '/beaches/:id' do
  id = params[:id]
  sql = "UPDATE beaches SET

    beach_name = '#{params[:beach_name]}' ,
    location = '#{params[:location]}' ,
    image_url = '#{params[:image_url]}' ,
    description = '#{params[:description]}' ,
    reviews = '#{params[:reviews]}' ,
    likes = #{params[:likes]}
    WHERE id = #{id};"
    db_query sql

    redirect "/beaches/#{id}"

end

get '/beaches/:id/delete' do
  id = params[:id]
  db_query "DELETE FROM beaches WHERE id = #{id};"
  redirect "/beaches"

end
