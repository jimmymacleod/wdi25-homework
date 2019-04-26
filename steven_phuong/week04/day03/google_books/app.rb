require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :home
end

get '/form' do
  query = params[:book]
  url = "https://www.googleapis.com/books/v1/volumes?q=#{ query }"
  result = HTTParty.get ( url )

  @results = result.parsed_response["items"]

  erb :result
end

get '/details/:id' do
  query = params[:id]
  url = "https://www.googleapis.com/books/v1/volumes/#{ query }"
  selftitle = HTTParty.get ( url )

  @details = selftitle.parsed_response

  erb :details
end
