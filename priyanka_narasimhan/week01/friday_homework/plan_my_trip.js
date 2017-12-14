//PLAN MY TRIP


//line N
const lineN = ['Times Square',
'34th',
'28th',
'23rd',
'Union Square',
'8th'
];


const planTrip = function (startLine, startPoint, endLine, endPoint) {
    //Changing line or not
    const changeLine = false;
    //Current Line
    var currentLine = lineN; //startLine;

    //Calculating the number of stops
    var startPointIndexVal = currentLine.indexOf(startPoint);
    var endPointIndexVal   = currentLine.indexOf(endPoint);
    var numOfStops         = endPointIndexVal - startPointIndexVal;
    var stopsNeedToTravel  = currentLine.slice(startPoint, endPoint);

    console.log(`You must travel through the following stops on the ${currentLine} ${stopsNeedToTravel}`);


};

planTrip();
