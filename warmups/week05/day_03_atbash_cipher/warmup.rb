=begin
(1) Create a class which accepts an input
(2) Create an 'encode' method which take the input (obtained in (1) above) and rebuilds it with the reverse alphabet
=end

require 'pry'

class Atbash

  # take an input and save the input as an instance variable
  def initialize input
    @word = input.downcase

    # only generate alphabet and reverse_alphabet once and store the two alphabets
    @alphabet = ("a".."z").to_a
    @reverse_alphabet = @alphabet.reverse
  end


  def encode
    message = ''

    #turn word input into an array
    @word.chars do |letter|
      #find where each letter appears in the normal alphabet

      index = @alphabet.find_index (letter)

      #use that index on the reverse alphabet

      cipher_character = @reverse_alphabet[index]

      #build out the message adding all of the individual letters together

      message += cipher_character
    end
    #implicit return - calling the encode method returns the message we built
    message
  end



end

puts "What is your secret word?"
# get user input
secret_word = gets.chomp

cipher = Atbash.new secret_word

puts "The encoded word is #{cipher.encode}"
# puts cipher.encode
# binding.pry
