Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
get '/magic' => 'magicball#home'
get '/magic/:q' => 'magicball#do_answer'
get '/guess/:x' => 'guessnumber#guess_number'
get '/games/rock_paper_scissors/:select' => 'games#rock_paper_scissors_play'
end
