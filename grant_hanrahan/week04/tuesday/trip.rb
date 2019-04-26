# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour

def trip_calc
  puts "Enter distance (in miles): "
  distance = gets.to_f

  puts "Miles per gallon: "
  miles_gallon = gets.to_f

  puts "Price per gallon: "
  price_gallon = gets.to_f

  puts "Speed (miles per hour): "
  speed = gets.to_f

  trip_time = distance / speed * 60

  trip_cost = distance / miles_gallon * price_gallon

  puts "Your trip will take #{trip_time.round(2)} minutes and cost $#{trip_cost.round(2)}"
  # end
end

trip_calc
