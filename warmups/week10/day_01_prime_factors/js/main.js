console.log('connected');

// /*
//   Figure out what a prime number is
//     - number divisible by 1 and itself ONLY
//
//     60 % primeNumber === 0
//
//     - find all primeNumbers within a certain range (max will be in input number)
//
//       (1) generate my range (1-60)
//       (2) test all numbers within the range (from (1)) to find prime numbers
//
//     - check 60 % primeNumber === 0
//       => prime factors
// */
//
const prime = {
  range: [], //all the numbers within the range 1,2,3,.....60

  primeRange: [], // all the prime numbers within range

  primeFactorRange: [], // the prime numbers that are also factors of input

  // (1) generate my range (1-60)


  getRange: function(num){
    this.range = [];
    //start at 2 because i know 1 is not a prime number
    for (let i = 2; i <= num; i++) {
      this.range.push(i)
    };

    return this.range;
  },

  getPrimeRange: function(arr){
    this.primeRange = [];

    // take a range and check if the number is a prime number

    for (var i = 0; i < arr.length; i++) {
      let isPrime = true; //flag to identify if num is a prime number

      let potentialPrime = arr[i];

      // test potentialPrime to see if it is divisible by any number other than 1 and itself;
      for (var j = 2; j < potentialPrime; j++) {
        if (potentialPrime % j === 0){
          isPrime = false
        } // if
      } // for

      if (isPrime === true){
        this.primeRange.push(potentialPrime)
      } // if


    }

    return this.primeRange

  },

  // we have prime numbers, now test if they're prime Factors
  getPrimeFactors: function(num){
    this.primeFactorRange = [];

    let numPrimes = this.getPrimeRange(this.getRange(num));

    for (let i = 0; i < numPrimes.length; i++) {
        //create a helper variable
        let testPrime = numPrimes[i];

        while (num % testPrime === 0){
          this.primeFactorRange.push(testPrime);
          num = num / testPrime
        }
    } // for

    console.log(this.primeFactorRange);
    return this.primeFactorRange;
  }


}


// SAHANA:
//
// let primeNumbers = function(num){
//   let primeFactors = [];
//
//   for (var i = 2; i <= num; i++) {
//
//     while (num % i === 0){
//       primeFactors.push(i);
//       num = num / i
//     }
//   }
//     console.log(`Prime Factors: ${primeFactors}`);
// }
//
// primeNumbers(60);
