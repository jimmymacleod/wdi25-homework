console.log('winning!');

// s1 = 1 - 1 + 1 - 1 + 1 - 1 + 1..

// THE PATTERN
  /* n = 4
  x = 1: +1
  x = 2: -1
  x = 3: +1
  x = 4: -1

  if x is ODD -> +1
  if x is EVEN -> -1
  */

let s1 = function(n) {
/*
  syntax:
    IF TEST ? DO IF TRUE : DO IF FALSE
*/
  // TERNARIES!!!!
  // return n % 2 !== 0 ? 1 : 0;
  return n % 2 === 0 ? 0 : 1;

  // TEST INPUT n only
    // if (n % 2 !== 0){
    //   console.log(1)
    // } else{
    //   console.log(0);
    // }

  // THE LONGER WAY WITH LOOP:
    // let sum = 0;
    // for (var i = 1; i <= n; i++) {
  	   // console.log({i})
      // if (i % 2 !== 0){
      //   sum += 1
      // } else {
      //   sum -= 1
      // }
    // }
  // console.log(`check(${n}): ${sum}`);
};

console.log(s1(4));

// s2 = 1 + 2 + 3 + 4 + 5 + 6 +

const s2 = function(n){
  //MATHS IS AMAZING!
  return ( n * ( 1+ n ) / 2)

  // LONG WAY (USE LOOP CREATED IN S1)
  // let sum = 0;
  // for (let i = 1; i <= n; i++) {
  //   console.log('i:', i);
  //   sum += i
  //   console.log('sum:', sum);
  //
  // }
  // console.log(`check(${n}): ${sum}`);

};
console.log(s2(4));
