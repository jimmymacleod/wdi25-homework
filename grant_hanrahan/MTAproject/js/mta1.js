const mtaLines = {
  'N': ["Times Square", "34th", "28th-N", "23rd-N", "Union Square", "8th-N"],
  'L': ["8th-L", "6th", "Union Square", "3rd", "1st"],
  '6': ["Grand Central", "33rd", "28th-6", "23rd-6", "Union Square", "Astor Place"]
};

console.log(mtaLines.N.indexOf('Union Square'));
console.log(mtaLines.L);
// console.log(mtaLines.toString(6));

// let line1;
// let line2;
// const changeOver =

const journeyPlan = function(line, startIndex, stopIndex){
  const stationList = []; // empty array to store stations along the trip
  // if( line1 === line2){ // if the journey is on a single line
    // stations = linePlanner(line1, startIndex, stopIndex);
    if( stopIndex > startIndex){ // check if the starting station is >= to the stop station
      for( let i = startIndex; i <= stopIndex; i++){
        stationList.push(line[i]); // add the stop indexs from line1 to the stationlist array
      }
    } else { // if the stop index is greater than the start index station
      // if( startIndex < stopIndex){
        for( let i = startIndex; i >= stopIndex; i--){
          stationList.push(line[i]);
        }
      //}
    }
    stationList.shift(); // remove the first station in the array
    return stationList;
  }
  // } else {
  //   console.log('Multi-line journey');
  // }

  const linePlanner = function(lineName, startStation,/*lineName2,*/ endStation){
    const line = mtaLines[lineName]; // lineName is assigned the input for line1(the first line). If a multi-line journey, lineName is assigned to line2 on the 2nd leg
    console.log(lineName);
    // const line2 = mtaLines[lineName2];
    // console.log(lineName2);
    const startIndex = line.indexOf(startStation);//start index is assigned the index of the starting station from the line entered
    const stopIndex = line.indexOf(endStation);//stop index is assigned the index of the end station from the line entered

    return journeyPlan(line, startIndex, stopIndex);//
  }


  const planTrip = function(line1, startStation, line2, endStation){
    // const changeOver1 = line1.indexOf('Union Square');
    //singleLine;
    let stations;
    if( line1 === line2){
      stations = linePlanner(line1, startStation, endStation);
      if( stations.length > 0){
        console.log(`You must travel through the following stops on the ${line1} line: ${stations}`);
      }
    } else { // multi-line journey
      // const changeOver1 = line1.indexOf('Union Square');
      let multiLineStation1 = linePlanner(line1, startStation, 'Union Square') //linePlanner(start line, start station, end station)
      if( multiLineStation1.length > 0){
        console.log(`You must travel through the following stops on the ${line1} line: ${multiLineStation1}`);
        return multiLineStation1;
      }
      console.log('Please change at Union Square');
      let multiLineStation2 = linePlanner(line2, 'Union Square', endStation) //linePlanner(start line, start station, end station)
      if( multiLineStation1.length > 0){
        console.log(`Your journey will then continue through the following stops on the ${line2} line: ${multiLineStation2}`);
        return multiLineStation2;
      }
      stations = multiLineStation1.concat(multiLineStation2); //from the else block - concat the multi line stations into the stations variable
    }

    console.log(`There are ${stations.length} stops in total`);// both single and multi line journeys station lengths can be read
  }

  // console.log(planTrip('N', 'Times Square', 'N', '28th-N'));
  // console.log(planTrip('N', 'Times Square', 'N', '28th-N'));
  // console.log(planTrip('N', '28th-N', 'N', 'Times Square'));
  console.log(planTrip('N', 'Times Square', '6', '33rd'));
