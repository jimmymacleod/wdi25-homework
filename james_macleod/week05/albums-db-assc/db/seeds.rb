puts "Artist of Note"

Artist.destroy_all

Artist.create name: "Pink Floyd" , nationality: "British", genre: "Progressive Rock" , twitter: "pinkfloyd", image: "https://consequenceofsound.files.wordpress.com/2011/09/pink-floyd-early-1968-2.jpg?quality=80"

Artist.create name: "Frank Ocean", nationality: "American", genre: "Alternative R&B" , twitter:"lFRANKOCEANl ", image: "http://www.festivalsnobs.com/wp-content/uploads/2015/08/frankocean.png"

Artist.create name: "SBTRKT" , nationality: "British" , genre: "UK Garage", twitter: "SBTRKT", image: "https://upload.wikimedia.org/wikipedia/en/7/7d/Sbtrkt-hold-on.jpg"

puts "Created #{Artist.all.length} Artists."
puts Artist.pluck(:name).join ', '

puts "Album Collection"

Album.destroy_all

Album.create name: "Dark Side of the Moon", image: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png"  , year: 1973 , tracks: 13, link: "https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv"
Album.create name: "In Rainbows", image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/In_Rainbows_Official_Cover.jpg/220px-In_Rainbows_Official_Cover.jpg", year: 2007 , tracks: 12 , link: "https://open.spotify.com/album/7eyQXxuf2nGj9d2367Gi5f"
Album.create name: "First Impressions of Earth", image: "https://static.stereogum.com/uploads/2015/12/The-Strokes-First-Impressions-of-Earth-640x640.jpg", year: 2010 , tracks: 11 , link: "https://open.spotify.com/album/1HQ61my1h3VWp2EBWKlp0n"


puts "Created #{Album.all.length} Album."
puts Album.pluck(:name).join ', '
