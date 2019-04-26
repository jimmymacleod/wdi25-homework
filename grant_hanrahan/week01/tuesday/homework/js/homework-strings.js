// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const DrEvil = function(amount) {
  if (amount === '1 million' || amount === 1000000 /*|| amount == 1 000 000*/){
    console.log(`${amount} dollars (pinky)`);
  } else {
    console.log(`${amount} dollars`);
  }
}
DrEvil(1000000);
DrEvil('1 million');
//DrEvil(1 000 000);
DrEvil(5);

// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function(firstString, secondString) {
  const sliceFirstString = firstString.slice(0,2);
  const sliceSecondString = secondString.slice(0,2);
  // console.log(`${sliceSecondString + firstString} ${sliceFirstString + secondString}`);//omix ipod
  // console.log(`${sliceFirstString + secondString} ${sliceSecondString + firstString}`);//ipod omix
  console.log(`${sliceSecondString + firstString.slice(2).concat()}  ${sliceFirstString + secondString.slice(2).concat()}`);// po mi
}
mixUp('mix', 'pod');
mixUp('dog', 'dinner');

// FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//fixStart('babble'): 'ba**le'
const fixedStart = function(stringInput){
  let stringArray = stringInput.split('');

  for(let i = 1; i < stringInput.length; i++){
    //console.log(`${stringInput}*For loop working`);
    let stringChar = stringInput.charAt(i); // stringInput[i]

    // if (stringInput.includes(stringChar)){
    if( stringChar === stringInput.charAt(0)){
      //console.log(stringInput.replace(stringChar.match(stringInput.charAt(0)), '*'));
      stringArray[i] = '*';
    }
    // return;

  } // for

  return stringArray.join('');

}

let result = fixedStart('babble');
console.log(result);

const fixStart = function(stringInput){
  const newInput = stringInput.replace(stringInput.match(stringInput.charAt(0)), '*');
  console.log(`${newInput}`);
}
fixStart('babble');

// Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
const verbing = function(verb){
  if (verb.length >= 3){
    if (verb.endsWith('ing')){
      console.log(`${verb}ly`);
    }
    else{
    console.log(`${verb + verb.slice(-1)}ing`);
    }
  }
  else {
  console.log(`${verb}`);
  }

};
verbing('walk');
verbing('swimming');
verbing('go');

// Not Bad

// Create a function called notBad that takes a single argument, a string.

// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
const notBad = function(nbInput){

}
