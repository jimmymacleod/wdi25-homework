puts "Populating Mountains DB"

Mountain.destroy_all

Mountain.create name:"Mt Everest", location:"Nepal", size:8848
Mountain.create name:"Mt Fuji", location:"Japan", size:3776
Mountain.create name:"K2", location:"Pakistan", size:8611
Mountain.create name:"Mt Kilimanjaro", location:"Tanzania", size:5895
Mountain.create name:"Matterhorn", location:"Switzerland", size:4478

print "Created #{Mountain.all.length} mountains."
puts Mountain.pluck(:name).join ', '
