Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/albums/new' => 'albums#new'
  post '/albums' => 'albums#create'

  get '/albums' => 'albums#index'
  get '/albums/:id' => 'albums#show'

  get 'albums/:id/edit' => 'albums#edit'
  post '/albums/:id' => 'albums#update'

  get '/albums/:id/delete' => 'albums#delete'

end
