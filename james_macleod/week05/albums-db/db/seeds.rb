puts "Album Collection"

Album.destroy_all

Album.create name: "Dark Side of the Moon", image: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png"  , year: 1973 , tracks: 13, link: "https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv"
Album.create name: "In Rainbows", image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/In_Rainbows_Official_Cover.jpg/220px-In_Rainbows_Official_Cover.jpg", year: 2007 , tracks: 12 , link: "https://open.spotify.com/album/7eyQXxuf2nGj9d2367Gi5f"
Album.create name: "First Impressions of Earth", image: "https://static.stereogum.com/uploads/2015/12/The-Strokes-First-Impressions-of-Earth-640x640.jpg", year: 2010 , tracks: 11 , link: "https://open.spotify.com/album/1HQ61my1h3VWp2EBWKlp0n"


puts "Created #{Album.all.length} Album."
puts Album.pluck(:name).join ', '
