console.log('Connected');


/*
(1) Generate an array of all numbers within a range (2-> 120)

(2) Loop through the array, isolating a single number, and testing it against the rest of the array (3 % 2 == 0; 4 % 2 === 0 etc)

*/

const sieve = {
  nums: [], // store true/false
  primesList: [], // store my prime numbers into

  calculatePrimes: function(max){
    // max = 120
    for (let i = 0; i < max; i++) {
      // [true, true, true]
      // nums[0] = true

      this.nums[i] = true;
    }
    // [true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]

    // to isolate a number from the this.nums array
    for (let i = 2; i < this.nums.length; i++) {
      let currentNum = i; // 2

      // test i against the rest of the array
      // want j = 3
      for (let j = currentNum + 1; j < this.nums.length; j++) {
        // i have 2 and 3, i want to test the numbers against each other

        // if j = 6, currentNum = 3
        // when we ran j = 6, currentNum = 2
        if ( j % currentNum === 0 && this.nums[j] === false) {
          this.nums[j] = false
        } // if
      } // j loop

    } // i loop

    this.printPrimes(this.nums);
    return this.primesList

  },

  printPrimes: function(primes){
    this.primesList = [];

    for (let i = 2; i < primes.length; i++) {
      if(primes[i] === true){
        this.primesList.push(i)
      } // if
    } // for loop
    console.log(`Primes found: ${this.primesList}`);
    return this.primesList;
  }

}

sieve.calculatePrimes(120)
console.log(sieve.primesList);
