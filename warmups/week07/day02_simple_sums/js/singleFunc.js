console.log('winning!');

// COMBINED AS A FUNCTION
const super_simple_sums = function(n) {
  let s1 = n % 2 === 0 ? 0 : 1;
  let s2 = n * ( 1+ n ) / 2;

  console.log(`n: ${n} \ns1 result: ${s1};\ns2 result: ${s2}`);
}

super_simple_sums(4)

//COMBINED AS AN OBJECT
const simple_sums = {

  s1: function(n){
    return n % 2 === 0 ? 0 : 1;
  },

  s2: function(n){
    return n * ( 1+ n ) / 2;
  },

  combined_result: function(n){
    let s1 = this.s1(n)
    let s2 = this.s2(n)
    console.log(`n: ${n} \ns1 result: ${s1};\ns2 result: ${s2}`);
  }
}

simple_sums.combined_result(4)
