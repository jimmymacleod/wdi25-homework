# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

puts "Enter loan amount: "
loan_amount = gets.chomp.to_i
puts "Enter the term of payment in months: "
time = gets.chomp.to_i
puts "Enter interest rate: "
rate = gets.chomp.to_f/100

i = (1+rate/12)**(12/12)-1
annuity = (1-(1/(1+i))**time)/i

payment = loan_amount/annuity

puts "Payment per month #{payment}"
