var isLeapYear = function(enterYear){
let year = false;
if(enterYear % 4 === 0 && enterYear % 100 != 0) {
  year = true;
};
if(enterYear % 100 === 0 && enterYear % 400 === 0){
  year = true;
};
if(!year){
  console.log('its not a leap year');
}else{
  console.log('its a leap year');
}
};

isLeapYear(2041);
