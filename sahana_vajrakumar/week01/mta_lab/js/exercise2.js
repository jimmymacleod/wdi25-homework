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

  route: function(start, startLoc, stop, stopLoc) {

    let startSubLine = [];
    let stopSubLine = [];
    // this is to find out the start line
    for (i = 0; i < this.lines.length; i++) {
      if (start === this.lines[i].name) {
        for (j = 0; j < this.lines[i].stops.length; j++) {
          if (startLoc === this.lines[i].stops[j]) {
            //this is for the case when startLoc is before union square.
            if (j < this.lines[i].stops.indexOf("Union Square")) {
              for (k = j; k <= this.lines[i].stops.indexOf("Union Square"); k++) {
                startSubLine.push(this.lines[i].stops[k]);
              };
              startSubLine.shift()
              //this is for the case when startLoc is after union square
            } else {
              for (k = this.lines[i].stops.indexOf("Union Square"); k <= j; k++) {
                startSubLine.push(this.lines[i].stops[k]);
              };
              startSubLine.reverse();
              startSubLine.shift();

            };

          };
        };
      };
    };
    //for stop line.


    for (i = 0; i < this.lines.length; i++) {
      if (stop === this.lines[i].name) {
        // let length = this.lines[i].stops.length;
        for (j = 0; j < this.lines[i].stops.length; j++) {
          if (stopLoc === this.lines[i].stops[j]) {
            //this is for the case when stoptLoc is before union square.
            if (j < this.lines[i].stops.indexOf("Union Square")) {
              for (k = j; k <= this.lines[i].stops.indexOf("Union Square"); k++) {
                stopSubLine.push(this.lines[i].stops[k]);

              };
              stopSubLine.reverse();
              stopSubLine.shift();
              stopSubLine.pop();


              //this is for the case when stopLoc is after union square
            } else {
              for (k = this.lines[i].stops.indexOf("Union Square"); k <= j; k++) {
                stopSubLine.push(this.lines[i].stops[k]);


              };
              stopSubLine.shift();
              stopSubLine.pop();

            };

          };
        };
      };
    };
    console.log('The number stops in between ' + '%c' + start + " " + '%c' + startLoc + " " + 'and' + " " + '%c' + stop + " " +  '%c' + stopLoc + " " + 'is' + " " + '%c' + (startSubLine.length + stopSubLine.length) ,'color:blue' , 'color:blue' , 'color:blue' , 'color:blue' , 'color:red');

    console.log('The stops in between are' + " " + '%c' + startSubLine + " " + '%c CHANGE AT UNION SQUARE' + " " + '%c and go through' + " " + '%c' + stopSubLine + " " + '%c to reach your destination' , 'color: blue' , 'color: red' , 'color:black' , 'color: blue' , 'color: black');




  }
}

subway.route("nLine" , "n34" , "nLine" , "n23 ");

// FOR user input prompt

// var startl = prompt("Please enter the start line", "<Enter here>");
// var startloc;
// var stopl;
// var stoploc;
//
// if (startl != null) {
//   startloc = prompt("Please enter the start location", "<Enter here>");
//   if (startloc != null) {
//     stopl = prompt("Please enter the stop line", "<Enter here>");
//     if (stopl != null) {
//       stoploc = prompt("Please enter the stop location", "<Enter here>");
//       if (stoploc != null) {
//         subway.route(startl, startloc, stopl, stoploc);
//       }
//
//
//     }
//   }
//
// }
