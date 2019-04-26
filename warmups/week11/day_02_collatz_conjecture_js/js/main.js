/*
PSUEDO
(1) Write a function which takes a number
(2) IF :
  (a) number is even: n/2
  (b) number is odd: 3n + 1
(3) Run it forever (or until n = 1 .. )

*/
console.log('hello');

const collatz = function(num){
  // collection will keep track of all the numbers i've tested
  // let collection = [];
  // collection.push(num);
  let collection = [num];
  // collection = [10, 6,4324,65,2,21, 1] (not the real numbers)

  // test the num input and build out my collection array
  // debugger;
  const makeCollection = function(){

    // test if even or odd

    // i want a loop which will stop when the last number in my collection = 1

    // arr[arr.length - 1]

    while( collection[collection.length - 1] > 1){
      const currentNum = collection[collection.length - 1];

      // TEST if odd / even

      if(currentNum % 2 === 0){
        nextIndex = currentNum / 2
      } else {
        nextIndex = currentNum * 3 + 1
      } // if

      collection.push(nextIndex)
      // debugger;
    } // while

  }
  makeCollection()

  const answer = function(){
    console.log(`The function ran ${collection.length - 1} times.`); // times it ran
    console.log(`The process was: ${collection.join(', ')}.`); // turn my array into a string
  }
  // console.log(collection);
  answer()
  return{
    start: num,
    collection,
    steps: collection.length - 1

  }
};

console.log(collatz(10));
