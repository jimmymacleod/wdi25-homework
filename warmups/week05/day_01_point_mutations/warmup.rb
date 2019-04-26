# Compare one string against another string and track how many times the respective letters are different

# (1) Write a method which take two strings
# (2) Turn the strings into arrays to allow for comparison
# (3) Keep track of mismatches
# (4) at the end want to print out the number of mismatches (i.e. the hamming distance)

require 'pry'
# APPROACH 1: AS METHOD
#
# def hamming_distance strand_one, strand_two
#
#   difference = 0
#
#   strand_one.chars.each_with_index do |letter, index|
#     if letter != strand_two[index]
#       difference += 1
#     end
#   end
#   p "The hamming distance between #{strand_one} and #{strand_two} is #{difference}"
# end
#
# hamming_distance "GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT"

# APPROACH 2: AS CLASS


class DNA_check

  def initialize str1, str2
    @strand_one = str1
    @strand_two = str2
  end

  def hamming_distance

    difference = 0

    @strand_one.chars.each_with_index do |letter, index|
      if letter != @strand_two[index]
        difference += 1
      end
    end
    p "The hamming distance between #{@strand_one} and #{@strand_two} is #{difference}"
  end

end
# binding.pry

test = DNA_check.new "GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT"

test.hamming_distance
