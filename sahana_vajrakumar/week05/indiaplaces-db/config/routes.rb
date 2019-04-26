Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'places#index'

  # CREATE
  get  '/places/new' => 'places#new'
  post '/places' => 'places#create'

  # READ
  get '/places' => 'places#index'
  get '/places/:id' => 'places#show', as: 'place'

  # UPDATE
  get '/places/:id/edit' => 'places#edit'
  post '/places/:id' => 'places#update'

  # DESTROY
  get '/places/:id/delete' => 'places#destroy'
end
