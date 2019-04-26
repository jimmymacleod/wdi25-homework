# Consider a 3% rate on a $100,000 loan. In decimals, 3% is .03, and when divided by 12 it is .0025. Multiply .0025 times $100,000 and you get $250 as the monthly interest payment.

def calc_mortgage_payment
  puts "Please enter your loan amount: "
  loan = gets.to_f

  puts "Please enter your loan rate: "
  rate = gets.to_f

  loan_rate_decimal = rate / 100
  calc_monthly_payment = loan_rate_decimal / 12 * loan

  puts "Your monthly payment is #{calc_monthly_payment}"
end

calc_mortgage_payment
