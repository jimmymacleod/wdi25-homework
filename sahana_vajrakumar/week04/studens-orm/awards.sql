CREATE TABLE awards (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name       TEXT,
  image_url  TEXT,
  description TEXT
);

-- seed data for this table
INSERT INTO awards( name, image_url, description, student_id)
  VALUES('Excellence', 'http://nepaloregon.org/wp-content/uploads/2016/01/winners_BPM_2013.png', 'Awarded for Excellence in studies' , 1);

  INSERT INTO awards( name, image_url, description, student_id)
    VALUES('Student Of The Year', 'https://www.admecindia.co.in/sites/default/files/field/image/admec_student_of_the_year_award.png', 'Awarded for Exellence in all the fields' , 2);

  INSERT INTO awards( name, image_url, description, student_id)
    VALUES('Appriciation', 'https://i.pinimg.com/736x/14/9f/b6/149fb6fae6c98f545e20b62ba2662dff--certificate-of-appreciation-office-games.jpg', 'Appriciation Award' , 1);

  INSERT INTO awards( name, image_url, description, student_id)
    VALUES('Star Student','http://www.positivepromotions.com/images/1000/NT2669B.jpg', 'Awarded for the Start Student' , 3);
