const mtaLines = {
  'N': ["Times Square", "34th", "28th-N", "23rd-N", "Union Square", "8th-N"],
  'L': ["8th-L", "6th", "Union Square", "3rd", "1st"],
  '6': ["Grand Central", "33rd", "28th-6", "23rd-6", "Union Square", "Astor Place"]
};

const journeyPlan = function(line, startIndex, stopIndex){//uses the line, startIndex and stopIndex values assigned through the linePlanner function. Depending on the index of the start and stop stations the for loop will count either forwards or backwards then add the values to a new station list array
  const stationList = []; // empty array to store stations along the trip
    if( stopIndex > startIndex){ // check if the starting station is >= to the stop station
      for( let i = startIndex; i <= stopIndex; i++){//from the index of the start station, moves forward through the array until the index of the start station is <= to the stop station
        stationList.push(line[i]); // add the stop indexs from line1 to the stationlist array
      }
    } else { // if the stop index is greater than the start index station
        for( let i = startIndex; i >= stopIndex; i--){//if the index of the start station is after (greater) than the index of the stop station, ove backwards through the array.
          stationList.push(line[i]);//add values to the station list array
        }
    }
    stationList.shift(); // remove the first(current) station in the array
    return stationList;
  }

  const linePlanner = function(lineName, startStation, endStation){
    const line = mtaLines[lineName]; // lineName is assigned the input for line1(the first line). If a multi-line journey, lineName is assigned to line2 on the 2nd leg
    // console.log(lineName);
    const startIndex = line.indexOf(startStation);//start index is assigned the index of the starting station from the line entered
    const stopIndex = line.indexOf(endStation);//stop index is assigned the index of the end station from the line entered
    return journeyPlan(line, startIndex, stopIndex);//takes the paramters given through the journeyPlan function so that they can be assigned values. The values are then used by the planTrip function when linePlanner is called.
  }

  const planTrip = function(line1, startStation, line2, endStation){
    //Journey on a single line;
    let stations;
    if( line1 === line2){//if the line entered is the same
      stations = linePlanner(line1, startStation, endStation);
      if( stations.length > 0){// If the trip involves more than one stop
        console.log(`You must travel through the following stops on the ${line1} line: ${stations}`);
      }
    } else { // multi-line journey
      // const changeOver1 = line1.indexOf('Union Square');
      let multiLineStation1 = linePlanner(line1, startStation, 'Union Square') //linePlanner(start line, start station, end station)
      if( multiLineStation1.length > 0){
        console.log(`You must travel through the following stops on the ${line1} line: ${multiLineStation1}`);
      }
      console.log('Please change at Union Square');//the multi-line trip is treated as two separate journeys until they are concatinated on line 50. Depending on the start/ stop indexs the trip will move forwards or backwards on line 1 until Union Square is reached. The second leg of the journey will then start at the index of Union Square on line 2 then move forward in the array of stations until the end station is reached.
      let multiLineStation2 = linePlanner(line2, 'Union Square', endStation) //linePlanner(start line, start station, end station)
      if( multiLineStation1.length > 0){
        console.log(`Your journey will then continue through the following stops on the ${line2} line: ${multiLineStation2}`);
      }
      stations = multiLineStation1.concat(multiLineStation2); //from the else block - concat the multi line stations into the stations variable
    }
    console.log(`There are ${stations.length} stops in total`);// both single and multi line journeys station lengths can be read

  }

  console.log(planTrip('N', 'Times Square', 'N', '28th-N'));
  // console.log(planTrip('N', '28th-N', 'N', 'Times Square'));
  // console.log(planTrip('N', 'Times Square', '6', '33rd'));
  console.log(planTrip('6', '33rd', 'L', '8th-L'));
