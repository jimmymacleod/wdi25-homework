require 'pry'
# Create letter values hash

letter_values = {
  1 => ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2 => ["D", "G"],
  3 => ["B", "C", "M", "P"],
  4 => ["F", "H", "V", "W", "Y"],
  5 => ["K"],
  8 => ["J", "X"],
  10 => ["Q", "Z"]
}

score = 0

puts 'Give me your word, please'
word = gets.chomp
# word becomes array through .chars
# .chars is a helper method which gives us each individual letter of a string and turns it into an array
word.upcase.chars.each do |letter|
  # eg 'letter' = J
  letter_values.each do |key, value|
    if letter_values[key].include?( letter )
      score += key
    end # if

    #alternate one line version if statement:
    # score += key if value.include? ( letter )

  end # letter_values.each

end # word.each

puts "Your word was #{ word }, the score is #{ score}. Yay!"
# binding.pry
