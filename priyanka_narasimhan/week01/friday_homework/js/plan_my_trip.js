//PLAN MY TRIP

const subway = {

allLines : {
//line N
lineN : ['Times Square',
          '34th',
          '28th',
          '23rd',
          'Union Square',
          '8th'
        ],

lineL : ['8th',
          '6th',
          'Union Square',
          '3rd',
          '1st'
        ],

line6 : ['Grand Central',
          '33rd',
          '28th',
          '23rd',
          'Union Square',
          'Astor Place',
        ]

},

 reverseStations : function(lineToReverse){
  //If station is backwards of start point,
  //reverse the array in temp letiable and
  //make that the current array
    let reversedPointsArray = lineToReverse.reverse();
    console.log(`reverseddd stations: ${lineToReverse}`);
    return reversedPointsArray;
    },



   singleLineTrip : function(startLine, startPoint, endLine, endPoint){
        let currentLine=[];
        currentline = subway[startLine];
        let currentLineName = startLine;
        let revLine;
        console.log(`CURRENTLINE:${startLine}`);

        //Calculating the number of stops
        let startPointIndexVal = currentLine.indexOf(startPoint);
        let endPointIndexVal   = currentLine.indexOf(endPoint);
        if(startPointIndexVal > endPointIndexVal){
          revLine = reverseStations(currentLine);
           startPointIndexVal = currentLine.indexOf(startPoint);
           endPointIndexVal   = currentLine.indexOf(endPoint);
          currentLine = revLine;

        };
        //console.log(startPointIndexVal);
        //console.log(endPointIndexVal);
        let numOfStops = endPointIndexVal - startPointIndexVal;
        let stopsNeedToTravel ;
        //corner case : if no stops in between, .slice returns undefined value, so assign last stop
        if(numOfStops === 1){
          stopsNeedToTravel = currentLine[endPointIndexVal];
        }
        else{
         stopsNeedToTravel = currentLine.slice(startPointIndexVal+1, endPointIndexVal);
        }
        //console.log(`NOOFSTOPS:${numOfStops}`);
        //console.log(stopsNeedToTravel);
        //console.log(stopsNeedToTravel);

          //${currentLine}:$stopsNeedToTravel`);

          //Position back stations array to the right place, if reversed earlier
          if(startPointIndexVal > endPointIndexVal){
            revLine = reverseStations(currentLine);
            currentLine = revLine;
          };
    },

   multiLineTrip : function(startLine, startPoint, endLine, endPoint){
    ///FIRST TRIP
        //Change end line to Union Square
        let endPointInFirstJourney = 'Union Square';
        let endLineInFirstJourney  = startLine;
        this.singleLineTrip(startLine, startPoint, endLineInFirstJourney, endPointInFirstJourney);
    ////SECOND TRIP
        let  startLineInSecondJourney    = endLine;
        let  startPointInFirstJourney    = 'Union Square';
        console.log(`Change at UNION SQUARE\nYour journey continues through the following stops`);
        this.singleLineTrip(startLineInSecondJourney, startPointInFirstJourney, endLine, endPoint);
    },


   planMyTrip : function(startLine, startPoint, endLine, endPoint){
      console.log(`YOUR TRIP PLAN: ${startLine}:${startPoint}   TO   ${endLine}:${endPoint}`);
      if(startLine === endLine){
        this.singleLineTrip(startLine, startPoint, endLine, endPoint);
      } else {
        this.multiLineTrip(startLine, startPoint, endLine, endPoint);
      }
    }

};


// console.log(`Single trips\n\n\n\n\n`);
//
// singleLineTrip('lineN', '34th', 'lineN', '8th');
// singleLineTrip('lineN', '8th', 'lineN', '34th');

//console.log(`Single trips - end\n\n\n\n\n`);



// multiLineTrip('lineN', '34th', 'line6', 'Astor Place');
// multiLineTrip('lineN', '34th', 'line6', 'Grand Central');


subway.planMyTrip('lineN', '34th', 'line6', 'Astor Place');
subway.planMyTrip('lineN', '34th', 'line6', 'Union Place');

//planMyTrip('lineN', '34th', 'lineN', 'Times Square');
