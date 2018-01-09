# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.

# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)

puts "\nWhat would you like to do today? \n\n Available options ---- \n \nADD\nMINUS\nTIMES\nDIVIDE\nEXPONENT\nSQUARE ROOT \n "

function_choice = gets().chomp.downcase



def function_to_perform(function_choice)

  # puts function_choice

  if function_choice == 'square root'
    puts "What number would you like to square root?"
    num1 = gets().chomp.to_i
  else
    # puts "#{function_choice}"
    puts "What\'s the first number in the problem?"
    num1 = gets().chomp.to_i
    puts "What\'s the second number in the problem?"
    num2 = gets().chomp.to_i
  end
  # p num1
  # p num2
  if function_choice == 'add'
    answer = num1 + num2
    puts "Answer : #{answer}"
  elsif function_choice == 'minus'
    answer = num1 - num2
    puts "Answer : #{answer}"
  elsif function_choice == 'times'
    answer = num1 * num2
    puts "Answer : #{answer}"
  elsif function_choice == "divide"
    answer = num1 / num2
    puts "Answer : #{answer}"
  elsif function_choice == 'exponent'
    answer = num1 ** num2
    puts "Answer : #{answer}"
  elsif function_choice == 'square root'
    answer = Math.sqrt(num1)
    puts "Answer : #{answer}"
  else
    puts "wrong input"
  end

end

function_to_perform(function_choice)

# def add(num1, num2)
#   equals = num1 + num2
#   return equals
# end
