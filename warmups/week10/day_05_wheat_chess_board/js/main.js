console.log('connected');

/*
(1) Generate board (create a range of 1-64)

Square 1: 1 grain
Square 2: 2 grains
Square 3: 4 grains
Square 4: 8 grains

Pattern ...???!?!?!?!?!?!!?
2 to the power of x-1
HOW? Math.pow(2,3)

(2) Utilise the pattern determined above to calculate the number of grains in each squarre

(3) add the numbers altogether

*/
const grains = {

  // range   _.range([start], stop, [step])
  // generating an array 1-64
  board: function(){
    return _.range( 1,65 )

  }, // board

  // calculating how many grains per square
  square: function(num){
    return Math.pow(2, num - 1)
  },

  grainArray: function(){

    let output = [];
  // var array1 = ['a', 'b', 'c'];
  //
  // array1.forEach(function(element) {
  //   console.log(element);

  // this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,.....]


    const board = this.board();

    // console.log(board);

    board.forEach(function( element ){
      // forEach needed callback causing 'this' to refer to window not the object grains

      // console.log(this.square(element));
      // console.log(grains.square(element));
      output.push(grains.square(element))
    })

    return output

  }, // grainArray

  totalSum: function(){
  // use .reduce to calculate total
  // SYNTAX:
  //     var sum = [0, 1, 2, 3].reduce(function (a, b) {
  //     return a + b;
  //      }, 0);

  const grainArray = this.grainArray();

  // console.log(grainArray);

  const total = grainArray.reduce(function( sum, num){
    return sum + num;
  }, 0);

  console.log(`The total owed is ${total}`);

  return total;

  }
} // object

// SAHANA AND GRANT'S ONE LINE SOLUTION
  // console.log(Math.pow(2, 64))
