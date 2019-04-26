//Object that holds lines as keys and stations as values.
const lines = {
  N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};
//forward loop that grabs indices from the array of stations. fromStat = which station t start from, toStat = which station to stop at including the station itself
//sum variable is keeping track of the iteration of stops
const fwdLoop = function(stations, fromStat, toStat) {
  let sum = 0;
  for (var i = stations.indexOf(fromStat); i <= stations.indexOf(toStat); i++) {
    console.log(stations[i]);
    sum = sum + 1;
  }
  return sum;
};
//Reverse loop that grabs indices from the array of stations. fromStat = which station to start from, toStat = which station to stop at including the station itself
const revLoop = function(stations, fromStat, toStat) {
  let sum = 0;
  for (var i = stations.indexOf(fromStat); i >= stations.indexOf(toStat); i--) {
    console.log(stations[i]);
    sum = sum + 1;
  }
  return sum;
};
//Main function
const planTrip = function(startLine, startStation, endLine, endStation) {
//Variables used in logic
  const arrStart = lines[startLine]; //selects lines array according to user's first argument (startLine)
  const arrEnd = lines[endLine];  //selects lines array according to user's third argument (endLine)
  const firstStation = arrStart.indexOf(startStation); //User's second argument selects index of station from first argument's station array
  const lastStation = arrEnd.indexOf(endStation);//User's fourth argument selects index of station from third argument's station array
  const interchange = arrStart.indexOf('Union Square');//index of 'Union Square'. Used before changing lines (first leg)
  const interchangeEnd = arrEnd.indexOf('Union Square');//index of 'Union Square'. Used after changing lines (second leg)
  let total = 0;// summed total of all stations looped in journey

  if ((startStation === endStation) && startLine === endLine){//returned if user hasn't selected diff destination
    return console.log('Your destination is the same as your origin');
  }
//main program logic begins
  console.log(`You must travel through the following stops on the ${startLine} line:`);
//Logic runs if arguments have different lines
  if (startLine !== endLine) {
    if (firstStation < interchange) { //if origin station is before the interchange
      total = total + fwdLoop(arrStart, startStation, 'Union Square');// forward loop from origin station to interchange + sum stops (first leg)
    }
    else {// if origin station after interchange, reverse loop to from origin station to interchange + sum stops (first leg)
      total = total + revLoop(arrStart, startStation, 'Union Square');
    }
    //message for second leg of the journey after interchange
    console.log(`Change at Union Square and travel through the following stop(s) on the ${endLine} line`);

    if (lastStation < interchangeEnd) {//if destination station is before 'Union Square' (second leg is interchangeEnd)
      total = total + fwdLoop(arrEnd, arrEnd[interchangeEnd-1], endStation);//reverse loop from interchange to destination station. Loop starts one before the 'Union square (interchangeEnd)' so as to not count it again in the summing total of all stations
      //console.log('test1');
    }
    else {
      total = total + revLoop(arrEnd, arrEnd[interchangeEnd+1], endStation);//forward loop from interchange to destination station. Loop starts one after the 'Union square (interchangeEnd)' station so as to not count it again in the summing total of all stations
      //console.log('test2');
    }
  }

  if (startLine === endLine) {// If both line arguements are the same then no interchanging is needed
    if (firstStation < lastStation) {//if origin station is before destination station
    total = total + fwdLoop(arrStart, startStation, endStation);//forward loop from orgin station to destination station
    }
    else {//otherwise origin station must be after destination station so we reverse loop to it.
      total = total + revLoop(arrStart, startStation, endStation);
      //console.log('test3');
    }
  }

  console.log(`${total} stops in total.`);//logs total stations count
};

//planTrip('N', 'Times Square', 'N', 'Times Square');
planTrip('N', 'Times Square', '6', 'Astor Place');
//planTrip('L', 'Union Square', 'L', 'Times Square');
//planTrip('6', 'Astor Place', 'L', '6th');

// N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
// L: ['8th', '6th', 'Union Square', '3rd', '1st'],
// 6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
