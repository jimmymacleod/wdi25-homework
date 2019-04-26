class GamesController < ApplicationController
  def rock_paper_scissors_play
    @select = params[:select]
    rps = ["rock" , "paper" , "scissors"]
    @result = rps[Random.rand(rps.size)]
  end
end
