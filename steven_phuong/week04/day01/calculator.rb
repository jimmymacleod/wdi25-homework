puts 'Welcome to the Calculator'

puts 'Choose an option'
puts '1. Additions (+)'
puts '2. Minus (-)'
puts '3. Multiplication (x)'
puts '4. Division (/)'
puts '5. Exponents (^)'
puts '6. Square Root (√)'
puts '7. BMI Calculator'
puts '100. Quit'

get_menu = gets.to_i

until get_menu == 100
  if get_menu == 1
    puts "You have entered into Addition"
    puts "Please enter your first number"
    first_number = gets.to_f
    puts "Please enter your second number"
    second_number = gets.to_f
    answer = first_number + second_number
    puts "#{first_number} + #{second_number} = #{ answer }. Please type '90' to return to menu or '100' to quit"
  elsif get_menu == 2
    puts "You have entered into Minus"
    puts "Please enter your first number"
    first_number = gets.to_f
    puts "Please enter your second number"
    second_number = gets.to_f
    answer = first_number - second_number
    puts "#{first_number} - #{second_number} = #{ answer }. Please type '90' to return to menu or '100' to quit"
  elsif get_menu == 3
    puts "You have entered into Multiplication"
    puts "Please enter your first number"
    first_number = gets.to_f
    puts "Please enter your second number"
    second_number = gets.to_f
    answer = first_number * second_number
    puts "#{first_number} x #{second_number} = #{ answer }. Please type '90' to return to menu or '100' to quit"
  elsif get_menu == 4
    puts "You have entered into Division"
    puts "Please enter your first number"
    first_number = gets.to_f
    puts "Please enter your second number"
    second_number = gets.to_f
    answer = first_number / second_number
    puts "#{first_number} / #{second_number} = #{ answer }. Please type '90' to return to menu or '100' to quit"
  elsif get_menu == 5
    puts "You have entered into Exponents"
    puts "Please enter your first number you want multiplied"
    first_number = gets.to_i
    puts "Please enter how many times you want the number multiplied"
    second_number = gets.to_i
    answer = first_number ** second_number
    puts "#{first_number} power of #{second_number} is #{ answer }."
    puts "Please type '90' to return to menu or '100' to quit"
  elsif get_menu == 6
    puts "You have entered into Square Root"
    puts "Please enter the number you want to Square Root"
    first_number = gets.to_i
    require 'cmath'
    answer = CMath.sqrt(first_number)
    puts "Square root of #{first_number} is #{ answer }."
    puts "Please type '90' to return to menu or '100' to quit"
  elsif get_menu == 7
    puts "You have entered into BMI"
    puts "Please enter your weight in KG"
    first_number = gets.to_f
    puts "Please enter your height in M"
    second_number = gets.to_f
    first_answer = first_number % second_number
    answer = first_answer % second_number
 * 100 }."
    puts "Please type '90' to return to menu or '100' to quit"
  elsif get_menu == 90
    puts 'Choose an option'
    puts '1. Additions (+)'
    puts '2. Minus (-)'
    puts '3. Multiplication (x)'
    puts '4. Division (/)'
    puts '5. Exponents (^)'
    puts '6. Square Root (√)'
    puts '7. BMI Calculator'
    puts '100. Quit'
  else
    puts "Please type '90' to return to menu or '100' to quit"
  end
  get_menu = gets.to_i
end
