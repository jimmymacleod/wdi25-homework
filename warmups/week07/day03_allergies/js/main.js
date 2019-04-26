console.log('We can do this!!');

const allergens = {

  scorecard: {
    1: 'eggs',
    2: 'peanuts',
    4: 'shellfish',
    8: 'strawberries',
    16: 'tomatoes',
    32: 'chocolate',
    64: 'pollen',
    128: 'cats'
  },

  getKeys: function(){
    const allergy_keys = Object.keys(this.scorecard).map(Number).reverse();
      //[128, 64, 32, 16, 8, 4, 2, 1]
    return allergy_keys
  },

  getList: function(score){
    const keys = this.getKeys();
    let allergies = [];

    // loop through keys
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];

    // if key is less than or equal to the score
      if (key <= score){
      // key = 32
        // console.log(this.scorecard[key]);

        // access the respective value of that key from the scoreboard object

        allergies.push(this.scorecard[key])

        // console.log(allergies);
        // subtract the key from the current score
        score -= key;

      }
    }; //for loop
    return allergies

  },

  diagnosis: function(score){
    let allergyList = this.getList(score);
    // console.log(allergyList)

    // check whether there are allergens in the list obtained in getList()
    if (allergyList.length > 0) {
      console.log(`You are allergic to: ${allergyList.join(', ')}`)
    } else {
      console.log('You are not allergic to the allergens tested');
    }
  }
}

allergens.diagnosis(34);
