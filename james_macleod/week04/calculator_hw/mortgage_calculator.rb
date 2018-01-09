cal_running = true

while cal_running
  puts "\nWelcome to the Mortgage Calculator. \n\nLets start with the amount of the loan you'd like to borrow. How much would you like?"


  amount = gets.to_i

  puts "\nHow long would you like to pay off your debt?"

  time = gets().to_i
  tmp = time*12

  puts "\nWhat is the current interest rate?"

  rate = gets().to_f
# puts rate

  mr= (rate/12)/100
# puts monthly_rate

# puts mr
# puts tmp

  monthly_payments = amount * ((mr*(1+mr)**tmp)/(((1+mr)**tmp) -1))

  puts "\nYour monthly payments would be equal to :  $#{monthly_payments.round(2)}"

  puts "\nWould you like to run the calculator again? (Y/N)"
  answer = gets().chomp

  if answer == 'N'
    return #break
  else
    puts "------------------------------------"
  end

end
