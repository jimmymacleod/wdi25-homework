Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'mountains#index'

  #CREATE
  get '/mountains/new' => 'mountains#new'
  post '/mountains' => 'mountains#create'

  #READ
  get '/mountains' => 'mountains#index'
  get '/mountains/:id' => 'mountains#show', as: 'mountain'

  #UPDATE

  get '/mountains/:id/edit' => 'mountains#edit'
  post '/mountains/:id' => 'mountains#update'

  #DELETE
  get '/mountains/:id/delete' => 'mountains#destroy'


end
