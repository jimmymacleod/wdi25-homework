let subway = {
  lines: [{
      name: "nLine",
      stops: ["Times Square", "n34", "n28", "n23", "Union Square", "n8", "n9", "n10"]
    },
    {
      name: "lLine",
      stops: ["l8", "l6", "Union Square", "l3", "l1"]
    },
    {
      name: "sixLine",
      stops: ["Grand Central", "six33", "six28", "six23", "Union Square", "Astor Place"]
    }
  ],

  // let junction = "Union Square",

  calculateTrip: function(line , location){
  let startSubLine = [];
  for (i = 0; i < this.lines.length; i++) {
    if (line === this.lines[i].name) {

      for (j = 0; j < this.lines[i].stops.length; j++) {
        if (location === this.lines[i].stops[j]) {
          //this is for the case when startLoc is before union square.
          if (j < this.lines[i].stops.indexOf("Union Square")) {
            for (k = j; k <= this.lines[i].stops.indexOf("Union Square"); k++) {
              startSubLine.push(this.lines[i].stops[k]);

            }
            //startSubLine.shift()

            //this is for the case when startLoc is after union square
          } else {
            for (k = this.lines[i].stops.indexOf("Union Square"); k <= j; k++) {
              startSubLine.push(this.lines[i].stops[k]);


            }
            //startSubLine.reverse();
            //startSubLine.shift();

          }

        }
      }
    }
  }
  return startSubLine;
},

route: function(start, startLoc, stop, stopLoc){

let startRoute = this.calculateTrip(start , startLoc);
let stopRoute= this.calculateTrip(stop , stopLoc);

//startRoute.shift();
//stopRoute.pop();
//stopRoute.reverse();



console.log(`${startRoute} , ${stopRoute}`);


}
}

subway.route("sixLine" , "Grand Central" , "lLine" , "l8");
