# Explanation
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


def menu
  puts "**********************"
  puts "Press 1 for Addition"
  puts "Press 2 for subtraction"
  puts "Press 3 for multiplication"
  puts "Press 4 for division"
  puts "Press 5 to calculate exponents"
  puts "Press 6 to calculate square root"
  puts "Press 7 to calculate mortgage"
  puts "Press 8 to calculate BMI"
  puts "Press 9 to calculate Trip time and cost"
  puts "Press 0 to quit"
  puts "**********************"

end

def addition()
  puts "Enter the numbers you want to add"
  num1 = gets.to_i
  num2 = gets.to_i
  result = num1 + num2
end

def subtraction
  puts "Enter the numbers you want to subtract"
  num1 = gets.to_i
  num2 = gets.to_i
  result = num1 - num2
end

def multiplication
  puts "Enter the numbers you want to multiply"
  num1 = gets.to_i
  num2 = gets.to_i
  result = num1 * num2
end

def division
  puts "Enter the numbers you want to divide"
  num1 = gets.to_i
  num2 = gets.to_i
  result = num1 / num2
end

def exponents
  puts "Enter the numbers"
  num1 = gets.to_i
  num2 = gets.to_i
  result = num1 ** num2
end
def square_root
  puts "Enter the number"
  num1 = gets.to_i
  result = Math.sqrt(num1)
end

def mortgage
  puts "Enter loan amount: "
  loan_amount = gets.chomp.to_i
  puts "Enter the term of payment in months: "
  time = gets.chomp.to_i
  puts "Enter interest rate: "
  rate = gets.chomp.to_f/100

  i = (1+rate/12)**(12/12)-1
  annuity = (1-(1/(1+i))**time)/i

  payment = loan_amount/annuity

end

def bmi
  puts "Enter your weight in KiloGrams"
  weight = gets.to_f
  puts "Enter your height in meters"
  height = gets.to_f
  temp = weight/height
  bmi = temp/height

end

def trip
  puts "Enter the travelling distance"
  distance = gets.to_f
  puts "Enter the mileage - kilometer/liter value"
  mileage = gets.to_f
  puts "Enter price per liter"
  price = gets.to_f
  puts "Enter the distance travelled per hour"
  distance_per_hour = gets.to_f

  trip_time = distance/distance_per_hour
  puts "Time required for your travel is #{trip_time}"

  cost = distance/100 * mileage * price
  puts "Total cost of your trip is #{cost}"
end

is_calculate = true

while is_calculate
  menu
  puts "Enter the prefered operation"
  input_value = gets.to_i
  case input_value
  when 1
    puts "Result = #{addition}"
  when 2
    puts "Result = #{subtraction}"
  when 3
    puts "Result = #{multiplication}"
  when 4
    puts "Result = #{division}"
  when 5
    puts "Result = #{exponents}"
  when 6
    puts "Result = #{square_root}"
  when 7
    puts "Payement = #{mortgage}"
  when 8
    puts "BMI = #{bmi}"
  when 9
    trip
  when 0
    is_calculate = false
  end
end
