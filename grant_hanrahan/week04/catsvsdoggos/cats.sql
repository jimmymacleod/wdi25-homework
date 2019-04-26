CREATE TABLE cats (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name  TEXT,
  evilness   TEXT,
  description TEXT,
  victims INTEGER,
  image_url   TEXT
);

INSERT INTO cats( name, evilness, description, victims, image_url)
  VALUES( "Cat Godzilla", "High", "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr G.", 0, "https://media.giphy.com/media/o1MKzb5yLMN1e/giphy.gif");

INSERT INTO cats( name, evilness, description, victims, image_url)
  VALUES( "Salem Stabber", "EXTREME", "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.", 100, "https://media.giphy.com/media/aSHhWd4YQarYs/giphy.gif");

INSERT INTO cats( name, evilness, description, victims, image_url)
  VALUES( "Sergeant Tibbs", "High", "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.", 80, "https://media.giphy.com/media/3rgXBI5M90M5KSOEp2/giphy.gif");
