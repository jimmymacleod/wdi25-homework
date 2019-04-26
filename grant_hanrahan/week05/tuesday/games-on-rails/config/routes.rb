Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => 'home#home'

  get '/home' => 'home#home'

  get '/magic8' => 'home#magic8'

  get '/magic8/:question' => 'home#magic_result'

  get '/secret' => 'home#secret'

  get 'secret/:num' => 'home#secret_num'

end
