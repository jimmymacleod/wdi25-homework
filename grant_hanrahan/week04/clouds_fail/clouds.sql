CREATE TABLE clouds (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  shape   TEXT,
  color   TEXT,
  image_url  TEXT,
  size     INTEGER
);

INSERT INTO clouds(shape, color, image_url, size)
  VALUES("Circular", "light grey","https://i.ytimg.com/vi/yltlJEdSAHw/maxresdefault.jpg",20 );


  <strong>ENEMIES!!:</strong>
  <ul>
    <% @cat.doggos.each do |doggo| %>
      <a href="/doggos/<%= doggo.id %>">
        <li><%= doggo.name %></li>
      </a>
    <% end %>
  </ul>

  <strong>Cat Frens:</strong>
  <ul>
    <% @doggo.cats.each do |cat| %>
      <a href="/cats/<%= cat.id %>">
        <li><%= cat.name %></li>
      </a>
    <% end %>
  </ul>

  INSERT INTO doggos( name, description, game, image_url, cat_id)
    VALUES( "Commander Wags", "Waggy wags heckin good boys very taste wow mlem fat boi, pupper vvv what a nice floof vvv doing me a frighten, noodle horse shibe shoober. Heckin good boys and girls h*ck very jealous pupper you are doing me the shock most angery pupper I have ever seen stop it fren.", "Fetch", "https://media.giphy.com/media/Z3aQVJ78mmLyo/giphy.gif", 1);

  INSERT INTO doggos( name, description, game, image_url, cat_id)
    VALUES( "Oz The All Pawerful", "What a nice floof woofer dat tungg tho boof big ol pupper ruff, long doggo wow very biscit such treat doge. Porgo heck blep floofs dat tungg tho pats adorable doggo maximum borkdrive, heckin good boys and girls waggy wags long woofer snoot doggorino. Lotsa pats pats doggo, borkdrive.", "Flying Frisbee", "https://media.giphy.com/media/25nu8bPVzL4Wc/giphy.gif", 1);


  <!-- <a href="/cats/<%= @doggo.cat.id %>"> -->
  <%= @doggo.cat_id %>

  <!-- <a href="/cats/<%= @doggo.cat.id %>">
    <%= @doggo.cat.name %>
  </a> -->

  -- https://media.giphy.com/media/25nu8bPVzL4Wc/giphy.gif
  -- https://media.giphy.com/media/L8odDCFUbbjO/giphy.gif
  -- https://media.giphy.com/media/vVCSJxqWdFfiw/giphy.gif

input type="text" name="victims" value="<%= @cat.victims %>"><br><br>

<input type="text" name="evilness" value="<%= @cat.evilness %>"><br>

<strong>Fren</strong>
  <% @doggo.cat.each do |cat| %>
    <a href="/cats/<%= cat.id %>">
      <li><% cat.name %></li>
    </a>
    <% end %>
