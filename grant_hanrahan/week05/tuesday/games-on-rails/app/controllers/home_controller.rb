class HomeController < ApplicationController


  def welcome

  end

  def magic8
  end

  def magic_result

    @question = params[:question]

    answers = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Outlook not so good",
      "Very doubtful"]

    @result = answers.sample


  end

  def secret
  end

  def secret_num

    @num = params[:num].to_i

    secret = 5

    @win = false
    @lose = false
    @message = ""

    # if @num == Integer
      if @num.to_i == secret
        @win = true
        @message = "Correct!!!"
      elsif @num.to_i != secret
        @lose == true
        @message = "Wrong!!!!"
      end
    # else
    #   @message = "Please enter a valid number between 1 and 10"
    # end
end

end
