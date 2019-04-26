console.log('Connected');
/*
(A)  write a function which accepts a number
  (1)  turn it into a string to break it up into single digits
  (2) square the single digits
  (3) add the single digits together

(B) Something loooping ....
*/


const happy = {
  list: [], // hold my happy Numbers

  found: 0, // to count how many numbers i've found

  sumOfDigitsSquared: function(num){
    const strNum = num.toString().split('');

    let sum = 0;
    //try using a forEach loop

//     var array1 = ['a', 'b', 'c'];
//
//    array1.forEach(function(element) {
//       console.log(element);
//    });

    strNum.forEach(function(value){
      //value = 2

        sum += value * value;

    })
      return sum
  }, // sumOfDigitsSquared

  checkHappy: function(num){

    let tracker = [];

    let squareSum = num;

    let stillChecking = true;

    while(stillChecking === true){
      squareSum = this.sumOfDigitsSquared(squareSum);

        /* happy.checkHappy(2)
        -> squareSum = 2
        go into loop

        this.sumOfDigitsSquared(2) (method above)
          -> 4

        squareSum (line 47) will update to 4
        */

      if (squareSum === 1){
        // console.log('Happy number found!');
        return true
      }

      if (tracker[squareSum] === true ){
        stillChecking = false
        // console.log('Not a happy number');
      }

      tracker[squareSum] = true;
      // tracker[2] = true [ , , true,]

      // if 2 is tested again,
        // tracker[2] = true THEREFORE line 63's if statement will be satisfied and stillChecking will be marked false AND we'll break from the while loop
    } // while
  }, // checkHappy

    generateList: function(num){
      // num = 10 (i.e num of happy numbers i want to generate)

      i = 1;

      while(this.found < num){
        if (this.checkHappy(i) === true){
          this.list.push(i);
          this.found++
        }
      i++
      }

      return this.list

    }

  } // object

  console.log(happy.generateList(10));
