const mtaLines = {
  N: ["Times Square", "34th Street", "28th Street", "23rd Street",
      "Union Square","8th Street"],
  L: [ "8th Street", "6th Street", "Union Square", "3rd Street", "1st Street"],
  6: ["Grand Central", "33rd Street", "28th Street", "23rd Street",
      "Union Square", "Astor Place"]
};

let singleLineStops = [];
let firstLineStops = [];
let secondLineStops = [];

const tripPlanner = function(locLine, locStart, destLine, destStop) {
  let locLineStations = mtaLines[locLine];
  let destLineStations = mtaLines[destLine];

  locStartIndex = locLineStations.indexOf(locStart);
  locStopIndex = locLineStations.indexOf("Union Square");
  destStartIndex = mtaLines[destLine].indexOf("Union Square");
  destStopIndex = mtaLines[destLine].indexOf(destStop);

  const getStops = function(line, startIndex, stopIndex) {
    let stops = [];
    if (startIndex > stopIndex) {
      line = line.reverse();
      startIndex = ((startIndex - line.length) * -1) -1;
      stopIndex = ((stopIndex - line.length) * -1) -1;
    }
    for (let i = startIndex; i <= stopIndex; i++) {
      stops.push(line[i]);
      // console.log('stops:', stops);
    }
    return stops;
  };

  if (locLine === destLine) {
    singleLineStops = getStops(locLineStations, locStartIndex, destStopIndex);
    singleLineStops = singleLineStops.slice(1);
    console.log(
      `You must travel through the following stops on the ${locLine} line: \n\n${singleLineStops.join(', ')}.\n\nTotal stops : ${singleLineStops.length}.`)
  } else {

    firstLineStops = getStops(locLineStations, locStartIndex, locStopIndex);
    secondLineStops = getStops(destLineStations, destStartIndex, destStopIndex);
    firstLineStops = firstLineStops.slice(1);
    secondLineStops = secondLineStops.slice(1);
    console.log(
        `You must travel the following stops on line ${locLine}: \n\n${firstLineStops.join(', ')}.\n\nChange at Union Square.\n\nYour journey continues throught the following stops on the ${destLine} line: \n\n${secondLineStops.join(', ')}.\n\nTotal stops : ${firstLineStops.length + secondLineStops.length}.`
      )
    }
  };

  // console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

  // console.log(`singleStops: ${singleStops}`);
  // console.log(`First Line Stops: ${firstLineStops}`);
  // console.log(`Second Line Stops: ${secondLineStops}`);


// getStops(destLineStations, destStartIndex, destStopIndex);
// getStops(locLineStations, locStartIndex, locStopIndex);

// const tripPlanner = function(locLine, locStart, destLine, destStop){
//
// // Created working variables for the lines.
// const locLineStations = mtaLines[locLine];
// const destLineStations = mtaLines[destLine];
//
// // Create variables to hold the indexes for the first line
// locStartIndex = locLineStations.indexOf(locStart);
// locStopIndex = destLineStations.indexOf("Union Square");
//
// // Created variables to hold the indexes for the second line
// destStartIndex = mtaLines[destLine].indexOf("Union Square");
// destStopIndex = mtaLines[destLine].indexOf(destStop);
//
// // Created reverse of line if the start index appears after the stop index.
// if (locStartIndex < locStopIndex){
//   locLineStations.reverse();
//   locStartIndex = (locStartIndex - locLineStations.length) * -1;
//   locStopIndex = (locStopIndex) - locLineStations.length) * -1;
// }
//
// // Created reverse of line if the start index appear after the stop index.
// if (destStopIndex < destStopIndex){
//   destLineStations.reverse();
//   destStartIndex = (destStartIndex - destLine.length) * -1;
//   destStopIndex = (destStopIndex - destLine.length) * -1;
// }
//
// // created a function that when called, takes the line, the index of the start and index of the stop and creates a new array with the stops between them.
// const getStops = function (line, startStopIndex, stopStopIndex){
//       const stops = [];
//       for (let i=startStopIndex; i<=stopStopIndex; i++){
//         stops += line[i];
//       }
//
// }
//
// if (locLine === destLine){
//   // getStops function and prints to the console.
//   getStops(locLineStations, locStartIndex, locStopIndex);
//
// } else {
//   // getStops function and prints to the console.
//   getStops(locLineStations, locStartIndex, locStopIndex)
//   //getStops function and prints to the console
//   getStops(destLine, destStartIndex, destStopIndex)
// }
//
// };
