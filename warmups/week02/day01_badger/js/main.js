console.log('it worked!');

const revengeOfBadger = {

  // - Track how many times each student in the class has clapped this week (just make up the numbers);

  studentClaps: {
      'Amir': 10,
      'Linda': 1,
      'James': 10,
      'Grant': 10,
      'Priyanka': 10
    },

    // - Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);

    shortlist: [],

    getCandidates: function(){
      for(let key in this.studentClaps){
        if (this.studentClaps[ key ] > 2){ // access revengeOfBadger.studentClaps object
          this.shortlist.push( key ); // push() function
        }
      } //for .. in loop
      return this.shortlist.length; // return length of the shortlist array
    }, // getCandidates

    // - Pick a random student to deliver the solution to Friday's warmup.

    draw: function(){
      let winner = "Badger";
      let numberOfCandidates = this.getCandidates();

      // - If no one has clapped enough that week, the program should indicate that Badger has to do his own damned warmup.

      if ( numberOfCandidates > 0){
        let random = Math.floor(Math.random() * numberOfCandidates); // Math.floor() rounds the number down, so we can access 0 -> shortlist.length-1
        winner = this.shortlist[ random ];
      }
      console.log(`YAY! ${winner} is doing the warmup today!!`)
      // return winner;

    } // draw function

} // revengeOfBadger


// SYNTAX OF OBJECTS
// const object = {
//
//   key: value,
//
//   key: value,
//
//   ARRAY IN AN OBJECT
//   key: [
//     val,
//     val
//   ],
//
//   METHOD (FUNCTION IN AN OBJECT)
//   key: function(){
//
//   },
//
//  OBJECT IN AN OBJECT
//  key: {
//       key: value,
//       key: value,
//     }
// }
