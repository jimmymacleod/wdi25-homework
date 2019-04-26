Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

root to: 'runs#home'

get '/runs/new' => 'runs#new'
post 'runs' => 'runs#create'

get'/runs' => 'runs#index'
get '/runs/:id' => 'runs#show', as: 'run' # gives us a helper called work_path(id)

get '/runs/:id/edit' => 'runs#edit'
patch 'runs/:id' => 'runs#update'

get '/works/:id/delete' => 'works#destroy'

resources :runners

end
