require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :home
end


get '/search' do
  query = params[:book]
  url = "https://www.googleapis.com/books/v1/volumes?q=#{ query }"
  # url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ query }"

  result = HTTParty.get( url )

  @results = result.parsed_response["items"]

  # binding.pry

  erb :results
end

get '/details/:id' do
  query = params[:id]
  url = "https://www.googleapis.com/books/v1/volumes/#{ query }"

  this_title = HTTParty.get( url )

  @details = this_title.parsed_response
  binding.pry
  erb :details

end
