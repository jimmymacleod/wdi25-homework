require 'pry'
def count_nucleotides (string)

  bases = {
    "A" => 0,
    "C" => 0,
    "G" => 0,
    "T" => 0
  }

  # message = ''
  message = []
  # iterate over each character of the input string
  string.upcase.chars do |letter|
    is_nucleotide = false

    # iterate over each key/value pair of the bases hash
    bases.each do |key, value|
      #check if the letter from string loop, and key from hash matches
      if letter == key
        bases[ key ] += 1
        is_nucleotide = true
      end # if
    end # bases.each

    # unless is_nucleotide
      # message += "#{  letter } is NOT a valid nucleotide"
    if is_nucleotide == false
      message.push "#{  letter } is NOT a valid nucleotide"
    end

  end # string

  bases.each do |key, value|
    # message += "#{key}: #{value}"
    message.push "#{key}: #{value}"
  end

  # binding.pry

  message
end


result =  count_nucleotides ("MAGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGCJHHJFHNGJFG")

# to print the array
result.each do |line|
  puts line
end
