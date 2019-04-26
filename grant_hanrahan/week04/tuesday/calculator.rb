def request_calc_operation
  puts "Please select from the following operators;\n + to add \n - to subtract \n * to multiply \n / to divide \n % for percentage"
  calc_selection = gets.chomp

  if calc_selection == '+'
    'add'
  elsif calc_selection == '-'
    'subtract'
  elsif calc_selection == '*'
    'multiply'
  elsif calc_selection == '/'
    'divide'
  elsif calc_selection == '%'
    'percentage'
  else
    'invalid'
  end
  # puts "Enter first number: "
  # first_num = gets.to_f
  # puts "Enter second number: "
  # second_num = gets.to_f

end


def calc_operation(operator, num1, num2)

  if operator == 'add'
    num1 + num2
  elsif operator == 'subtract'
    num1 - num2
  elsif operator == 'multiply'
    num1 * num2
  elsif operator == 'divide'
    num1 / num2
  elsif operator == 'percentage'
    num1 / num2 * 100

  # elsif operator == 'invalid'
  #   puts "Please enter a valid operator"
  end

  # puts "The answer is #{answer}"
end
calc_running = true

while calc_running
  current_calc = request_calc_operation

  if current_calc == "invalid"
    puts "Please enter a valid operator"
  else
    puts "Enter first number: "
    first_num = gets.to_f
    puts "Enter second number: "
    second_num = gets.to_f
    answer = calc_operation(current_calc, first_num, second_num)
    puts "The answer is #{answer}"
  end
end

request_calc_operation
calc_operation
