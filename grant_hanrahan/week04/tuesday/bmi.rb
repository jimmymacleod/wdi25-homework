
def calc_bmi
  puts "Please enter your Height (in meters): "
  height = gets.to_f

  puts "Please enter your Weight: "
  weight =  gets.to_f

  weight_bmi = weight / height
  actual_bmi = weight_bmi / height

  puts "Your BMI is #{actual_bmi.round(1)}"

end
calc_bmi
