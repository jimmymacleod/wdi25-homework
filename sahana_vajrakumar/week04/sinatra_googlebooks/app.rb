require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
require 'httparty'
require 'pry'


get '/home' do
  erb :home
end

get '/search' do
  # binding.pry
  query = params[:query]

url = "https://www.googleapis.com/books/v1/volumes?q=#{ query }"

result = HTTParty.get ( url )

   # result.parsed_response["results"][0]["original_title"]

  @results = result.parsed_response["items"]
  erb :results
end

get '/details/:id' do
  id = params[:id]

  url = "https://www.googleapis.com/books/v1/volumes/#{id}"
  result = HTTParty.get( url )
  @details = result.parsed_response
  erb :details
end
