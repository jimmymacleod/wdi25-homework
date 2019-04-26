require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
  erb :home
end

get '/pass' do
  erb :pass
end

get '/pass-2' do
  erb :pass2
end

get '/success' do
  erb :success
end

get '/write_test' do
  erb :write_test
end
