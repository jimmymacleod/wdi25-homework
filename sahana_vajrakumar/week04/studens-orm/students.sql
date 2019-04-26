CREATE TABLE students(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT,
  last_name TEXT,
  place TEXT,
  image_url TEXT,
  age INTEGER
);

INSERT INTO students(first_name , last_name , place , image_url , age)
VALUES("Jack" , "Sparrow" , "Sydney" , "https://images8.alphacoders.com/677/thumb-350-677866.jpg" , 22);

INSERT INTO students(first_name , last_name , place , image_url , age)
VALUES("Donnie" , "Brasco" , "Perth" ,  "http://gangsterreport.com/wp-content/uploads/2014/11/Johnny-Depp-as-Donnie-Brasco-300x246.jpg" , 23);

INSERT INTO students(first_name , last_name , place , image_url , age)
VALUES(" Sweeney" , "Todd" , "Adelaide" , "http://www.mbc.net/default/mediaObject/Photos/2013/september/20-9-2013/mbc2/SWEENEY-TODD-THE-DEMON-BARBER-OF-FLEET-STREET_1024/original/2d4a98d533d41519afe1bcdbcf0eaf0b3a9b940b/SWEENEY-TODD-THE-DEMON-BARBER-OF-FLEET-STREET_1024.jpg" , 22);

INSERT INTO students(first_name , last_name , place , image_url , age)
VALUES("Willi" , "Wonka" , "Melbourne" , "https://i.pinimg.com/originals/69/af/52/69af520bfaac90f6c9feeb5e3ffae633.jpg" , 23);
