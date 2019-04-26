# def journey_plan
# train_lines = {
#   :N => ['Times Square', '34th', '28th-N', '23rd-N', 'Union Square', '8th-N'],
#   :L => ['8th-L', '6th', 'Union Square', '3rd', '1st'],
#   :six => ['Grand Central', '33rd', '28th-6', '23rd-6', 'Union Square', 'Astor Place']
# }
#
# n_line = train_lines[:N]
# puts n_line
#
# l_line = train_lines[:L]
# puts l_line
#
# six_line = train_lines[:six]
# puts six_line
#
# end
# journey_plan
#
# def plan_trip(start_line, stop_line)
#   station_list[]
#
#   if start_line == n_line
#     station_list.push n_line
#   end
#   if start_line == l_line
#     station_list.push l_line
#   end
#   if start_line == six_line
#     station_list.push six_line
#   end
#
#   if stop_line == n_line
#     station_list.push n_line
#   end
#   if stop_line == l_line
#     station_list.push l_line
#   end
#   if stop_line == six_line
#     station_list.push six_line
#   end
#
#   journey_running = true
#   while journey_running
#   current_trip = plan_trip(start, stop)
#   puts "Your trip is #{current_trip}"
# end
#
# plan_trip :N, :L

# passenger_start = "station: #{@start_station} on the #{@start_line} line"
# passenger_end = "station: #{@end_station} on the #{@end_line}"
# puts "The first leg of your journey will be #{passenger_start}, your second leg will then be #{passenger_end}"

@line = {
  "N" => ['Times Square', '34th', '28th-N', '23rd-N', 'Union Square', '8th-N'],
  "L" => ['8th-L', '6th', 'Union Square', '3rd', '1st'],
  "6" => ['Grand Central', '33rd', '28th-6', '23rd-6', 'Union Square', 'Astor Place']
  # "6" => %w{ Grand Central 33rd 28th-6 23rd-6 Union Square Astor Place}
}

@journey = []

puts "Select your journey line N, L, 6\nstart line: "
@start_line = gets.chomp.upcase
start_line = @line[@start_line]

puts "Select departure station: #{start_line.join(", ")}\nstart station: "
@start_station = gets.chomp
# @start_station_index = start_line[@start_station].index
# @start_station_index = @start_line[@start_station].index
# @start_station_index = @line[@start_line].index @start_station
# puts "start station index #{@start_station_index}"

puts "Select your journey line N, L, 6\nend line: "
@end_line = gets.chomp.upcase
end_line = @line[@end_line]

puts "Select arrival station: #{end_line.join(", ")}\nend station: "
@end_station = gets.chomp
# @end_station_index = @line[@end_line].index @end_station
# puts "end station index #{@end_station_index}"

def union_square_index(line)
  # @union_square_index =
  @line[line].index 'Union Square'
end

def start_station_index
  @line[@start_line].index @start_station
end

def end_station_index
  @line[@end_line].index @end_station
end

def journey_forward(start_station, end_station, train_line)
  train_line = @line[train_line]
  @journey = train_line[start_station+1..end_station]

  # train_line[start_station+1..end_station].each do |stations|
  #   @journey << stations
  # end
end

def journey_backward(start_station, end_station, train_line)
  train_line = @line[train_line]
  train_line[end_station..start_station-1].reverse_each do |stations|
    @journey << stations
  end
end

def plan_trip
  if @start_line == @end_line
    if end_station_index > start_station_index
      # journey_forward(@start_station, @end_station, @start_line)
      journey_forward(start_station_index, end_station_index, @start_line)
      journey_string = @journey.join(", ")

      puts "You will travel through the following stops on the #{@start_line} line: #{journey_string}"
    else
      journey_backward(start_station_index, end_station_index, @start_line)
      journey_string = @journey.join(", ")

      puts "You will travel through the following stops on the #{@start_line} line: #{journey_string}"
    end
  else
    if end_station_index > start_station_index
      journey_forward(start_station_index, union_square_index(@start_line), @start_line)
      journey_string = @journey.join(", ")

      puts "You will travel through the following stops: #{journey_string} on the #{@start_line} line before changing at Union Square"
    end
    if end_station_index > start_station_index
      journey_forward(union_square_index(@end_line), end_station_index, @end_line)
      journey_string = @journey.join(", ")

      puts "After changing at Union Square, you will then pass through the following stops on the #{@end_line} line: #{journey_string}"
    end
  end
end

plan_trip
