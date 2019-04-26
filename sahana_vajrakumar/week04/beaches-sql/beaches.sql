CREATE TABLE beaches (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  beach_name TEXT,
  location TEXT,
  image_url TEXT,
  description TEXT,
  reviews TEXT,
  likes INTEGER

);

INSERT INTO beaches( beach_name , location , image_url, description, reviews, likes)
VALUES("Bondai" , "Sydney" , "https://www.travoh.com/wp-content/uploads/2016/09/01-Bondi-Beach-Exploring-10-of-the-Top-Beaches-in-Sydney-Australia.jpg", "Amazing beach"  , "Good but crowded" , "100");


INSERT INTO beaches( beach_name , location , image_url, description, reviews, likes)
VALUES("WineGlass Bay" , "Tasmania" , "http://www.goodwp.com/images/201309/goodwp.com_30029.jpg", "Beautiful beach"  , "Picture Perfect" , "500");

INSERT INTO beaches( beach_name , location , image_url, description, reviews, likes)
VALUES("Burleigh Heads Beach" , "Gold Coast" , "http://www.solnamara.com.au/site/wp-content/uploads/burleigh-heads-gold-coast-australia-24-1000x667.jpg", "Awesome beach"  , "Good" , "300");
