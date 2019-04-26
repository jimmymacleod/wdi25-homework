require 'pry'

=begin

(1) create a class of robots
(2) initialize name
(3) method to generate random name
(4) create a new method called 'reset'

=end

class Robot

  def initialize

    @name = make_name # @name = "KI435"
    @test = 'hello'
  end


  def make_name

    letters = ("A".."Z").to_a.sample(2) # array of alphabet - sample of 2
    numbers = (0..9).to_a.sample(3) # array of numbers - sample of 3
    (letters + numbers).join # concat the two arrays, and turn arrays into a single string
    # "KI435" (on initialize)
  end

  def reset
    @name = make_name
    # => "SX418"
    # reassigning @name to equal the return value of make_name
  end


end

binding.pry

amir = Robot.new
amir #shows what the value of at @name is
amir.make_name #will generate a new name but doesn't assign a new name
amir.reset #will reassign name to the return value of make_name
