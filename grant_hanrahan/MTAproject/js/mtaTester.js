// const line = {
// 	lineN: ["Times Square", "34th", "28th-N", "23rd-N", "Union Square", "8th-N"],
// 	lineL: ["8th-L", "6th", "Union Square", "3rd", "1st"],
// 	line6: ["Grand Central", "33rd", "28th-6", "23rd-6", "Union Square", "Astor Place"]
//
// }

const mtaLines = {
  'N': ["Times Square", "34th", "28th-N", "23rd-N", "Union Square", "8th-N"],
  'L': ["8th-L", "6th", "Union Square", "3rd", "1st"],
  '6': ["Grand Central", "33rd", "28th-6", "23rd-6", "Union Square", "Astor Place"]
};

const journeyPlanner = function(line, startIndex, endIndex){
	let stationList = [];

	if( endIndex > startIndex){
		for( let i = startIndex; i <= endIndex; i++){
			stationList.push(line[i]);
		}
	} else {
		for( let i = startIndex; i >= endIndex; i--){
			stationList.push(line[i]);
		}
	}
	stationList.shift();
	return stationList;
};

const linePlanner = function(lineName, startStation, endStation){
	const line = mtaLines[lineName];
	const startIndex = line.indexOf(startStation);
	const endIndex = line.indexOf(endStation);

	return journeyPlanner(line, startIndex, endIndex);
};
// this block of code is responsible for taking the input and assigning it to the argument of a variable. LineName is the string name of one of the mta lines, 

const planTrip = function(line1,startStation, line2, endStation){
	let stations;
	// single-line trip
	if( line1 === line2){
		stations = linePlanner(line1, startStation, endStation);
		if( stations.length > 0){
		console.log(`Your journey will stop at the following stations ${stations} on line: ${line1}`)
		}
	} else {
		let multiLineStation1 = linePlanner(line1, startStation, 'Union Square');
		if( multiLineStation1.length > 0){
			console.log(`Your journey will intially stop at the following stations ${multiLineStation1} on the ${line1} line`);
		}
		console.log('You will then need to change at Union Square');
		let multiLineStation2 = linePlanner(line2, 'Union Square', endStation);
		console.log(`From Union Square your journey will continue through the following stops ${multiLineStation2} on line: ${line2}`);

	stations = multiLineStation1.concat(multiLineStation2);
	}
	console.log(`Your journey will have a total number of stops of ${stations.length}`);
}
// console.log(planTrip('N', '34th', 'N', 'Union Square'));
console.log(planTrip('6', '33rd', 'L', '8th-L'));
