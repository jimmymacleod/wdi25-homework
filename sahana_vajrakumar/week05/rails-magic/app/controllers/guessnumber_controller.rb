class GuessnumberController < ApplicationController
  def guess_number
    @x = params[:x].to_i
    @random = Random.rand(1..10)
    # if @x == @value
    #   @result = "yes"
    #  else
    #  @result = "No"
    # end
  end
end
