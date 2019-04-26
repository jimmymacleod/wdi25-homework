
puts "Populating the must vist places"

Place.destroy_all

Place.create name: "Taj Mahal" , location: "Delhi", image:"https://s3-ap-southeast-1.amazonaws.com/gounesco.com/wp-content/uploads/2014/05/15053151/Taj-Mahal.jpg" , description: "Taj Mahal is a picturesque monument built in the indo-Persian architecture of the Mughals. It is an epitome of the sacred love and the strong bond of affection between the emperor and his wife." , rating: 10

Place.create name: "Udaipur Palace", location: "Udaipur", image: "https://dontgetserious.com/wp-content/uploads/2017/08/4f226eea24c192c66b63e78ce69aab031476259048.jpg" , description: " Located on the banks of Lake Pichola is the great City Palace built in a flamboyant style by the Rajasthani and Mughal emperors.", rating: 10

Place.create name: "Kerala Backwaters", location: "Kerala", image: "http://paradise-kerala.com/blog/wp-content/uploads/2014/09/houseboats-kerala-backwaters.jpg" , description: "Parallel to the Arabian Sea lie a chain of brackish lagoons and lakes which constitute the Kerala backwaters. The Kerala backwaters consist of a series of interconnected canals, lakes and rivers forming a maze-like system covering 900 kms of waterways.", rating: 10

Place.create name: "Leh Ladak", location: "Jammu & Kashmir", image: "https://guardianholidays.in/wp-content/uploads/2017/04/GH-Leh-ladakh-21st-April-01.jpg" , description: " It is one of the most sparsely populated regions in Jammu and Kashmir and its culture and history are closely related to that of Tibet. Ladakh is renowned for its remote mountain beauty and culture.", rating: 10

Place.create name: "Ajanta Caves", location: "Maharashtra", image: "http://images.indianexpress.com/2016/02/ajanta-caves759.jpg" , description: "The Ajanta Caves are about 29 rock-cut Buddhist cave monuments which date from the 2nd century BCE to about 480 CE in Aurangabad district of Maharashtra state of India.", rating: 10

print "Created #{ Place.all.length } places: "
puts Place.pluck(:name).join ', '
