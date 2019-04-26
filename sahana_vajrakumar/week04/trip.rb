# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - kilometer per liter
# - price per liter
# - speed in kilometer per hour

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
