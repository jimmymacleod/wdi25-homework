require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'students.db'
)
#
# Log out the SQL generated to remind us what we no longer have to write
ActiveRecord::Base.logger = Logger.new( STDERR )

class Student < ActiveRecord::Base
  has_many :awards  # requires student_id field in the awards table
end

class Award < ActiveRecord::Base
  belongs_to :student  # requires student_id field in the awards table
end

get '/home' do
  erb :home
  # binding.pry
end

post '/students' do

  Student.create(
    first_name:  params[:first_name],
    last_name:   params[:last_name],
    place:   params[:place],
    image_url:   params[:image_url],
    age:         params[:age]
  )

  redirect "/students"
end

get '/students' do
  # binding.pry
  @result = Student.all
  erb :student_index
end

get '/students/new' do
  erb :students_new
end

get '/students/:id' do
  @student = Student.find params[:id]
  erb :students_show
end

get '/students/:id/edit' do

  # id = params[:id]
  # result = db_query "SELECT * FROM animals WHERE id = #{id};"
  # @animal = result.first
  @student = Student.find params[:id]

  erb :students_edit
end

post '/students/:id' do

  student = Student.find params[:id]

  student.update(
    first_name:  params[:first_name],
    last_name:   params[:last_name],
    place:   params[:place],
    image_url:   params[:image_url],
    age:         params[:age]
  )

  redirect "/students/#{ student.id }"
end

get '/students/:id/delete' do

  # db_query "DELETE FROM animals WHERE id = #{params[:id]};"
  Student.destroy params[:id]


  redirect "/students"
end

############### This if CRUD for awards ###########

post '/awards' do

  Award.create(
    name:       params[:name],
    image_url:  params[:image_url],
    description: params[:description],
    student_id:  params[:student_id]
  )

  redirect "/awards"
end

# INDEX: show all rows in awards table
get '/awards' do

  # @result = db_query( "SELECT * FROM admirers;" )
  @result = Award.all
  erb :awards_index

end

# CREATE: show blank form (submits to post '/awards' above)
get '/awards/new' do
  erb :awards_new
end

# SHOW page to display details about one item, i.e. /awards/5
get '/awards/:id' do

  # id = params[:id]
  # result = db_query "SELECT * FROM awards WHERE id = #{id};"
  # @award = result.first
  @award = Award.find params[:id]

  erb :awards_show
end

# EDIT page, displays prepopulated form with the fields of an item
get '/awards/:id/edit' do


  # id = params[:id]
  # result = db_query "SELECT * FROM awards WHERE id = #{id};"
  # @award = result.first
  @award = Award.find params[:id]

  erb :awards_edit
end

# UPDATE page, the edit form above submits to this with the POST method
post '/awards/:id' do

  admirer = Award.find params[:id]

  admirer.update(
    name:       params[:name],
    image_url:  params[:image_url],
    description: params[:description],
    student_id:  params[:student_id]
  )

  redirect "/awards/#{ admirer.id }"
end

# DELETE page, the delete link submits to this
get '/awards/:id/delete' do


  # db_query "DELETE FROM awards WHERE id = #{params[:id]};"
  Award.destroy params[:id]

  redirect "/awards"
end
