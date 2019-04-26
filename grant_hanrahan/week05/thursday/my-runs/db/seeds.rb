Runner.destroy_all

runner1 = Runner.create name:'Wilson Kipsang', age: 34, nationality:'Kenya', gender:'Male', image:'https://www.the-star.co.ke/sites/default/files/styles/new_full_content/public/articles/2017/02/26/1514073.jpg?itok=WEjWlHfx'

runner2 = Runner.create name:'Geoffrey Kirui', age: 24, nationality:'Kenya', gender:'Male', image:'http://www.bostonherald.com/sites/default/files/styles/photos_featured_big/public/media/2017/04/17/041717marathonce016.jpg?itok=vjJfN-ri'

runner3 = Runner.create name:'Daniel Wanjiru', age: 25, nationality:'Kenya', gender:'Male', image:'http://www.cityam.com/assets/uploads/main-image/cam_standard_article_main_image/britain-athletics-marathon-671802040-58fca18fc6651.jpg'

runner4 = Runner.create name:'Eliud Kipchoge', age: 32, nationality:'Kenya', gender:'Male', image:'https://media.aws.iaaf.org/media/LargeL/354f0c1d-15f1-401e-a8e4-87aa71e4f530.png?v=1785819764'

runner5 = Runner.create name:'Geoffrey Kamworor', age: 35, nationality:'Kenya', gender:'Male', image:'http://a57.foxnews.com/images.foxnews.com/content/fox-news/sports/2017/11/05/shalane-flanagan-becomes-first-american-woman-to-win-nyc-marathon-in-40-years/_jcr_content/article-text/article-par-12/inline_spotlight_ima/image.img.jpg/612/344/1509903409033.jpg?ve=1&tl=1'

puts "Created #{ Runner.all.length } runners: \n#{ Runner.pluck(:name).join "\n" }"

puts "Populating list of runs"

Run.destroy_all

Run.create name:'Tokyo Marathon', distance:'42km', date:'25/02/2018', country:'Japan', city:'Tokyo', image: 'https://www.marathontours.co.nz/uploads/tokyo-generic-main.jpg', runner: runner1

Run.create name:'Boston Marathon', distance:'42km', date:'16/02/2018', country:'USA', city:'Boston', image: 'http://www.nomeatathlete.com/wp-content/uploads/2009/04/bostonmarathon.jpg', runner: runner2

Run.create name:'London Marathon', distance:'42km', date:'22/04/2018', country:'UK', city:'London', image: 'http://blogs.bmj.com/bjsm/files/2015/06/london-marathon.jpg', runner: runner3

Run.create name:'Berlin Marathon', distance:'42km', date:'25/09/2018', country:'Germany', city:'Berlin', image: 'https://wmimg.azureedge.net/public/img/marathons/bmw-berlin-marathon/bDMIHP_bmw-berlin-marathon.jpg?c=1504021533', runner: runner4

Run.create name:'New York City Marathon', distance:'42km', date:'06/11/2018', country:'USA', city:'New York', image: 'http://magicbulletblog.com/wp-content/uploads/2012/05/nyc-marathon.jpg', runner: runner5
