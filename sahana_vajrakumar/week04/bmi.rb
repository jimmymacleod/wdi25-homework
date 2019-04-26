puts "Enter your weight in KiloGrams"
weight = gets.to_f
puts "Enter your height in meters"
height = gets.to_f
temp = weight/height
bmi = temp/height
puts "your BMI is #{bmi}"
