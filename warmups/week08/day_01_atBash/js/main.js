console.log("WARM?");

const atbash = {

  alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],


  encode: function(input){
    let output = '';

    const str = input.toLowerCase().split('');
    // =>["m", "i", "c", "h", "e", "l", "l", "e"]
    const cipher = this.alphabet.slice().reverse()
    // we need .slice() so this.alphabet does not destroy itself

    for (let i = 0; i < str.length; i++) {
      const index = this.alphabet.indexOf(str[i])
      // debugger;
      // console.log(index);

      console.log(`REVERSE ALPHABET:${cipher}`);

      let coded_letter = cipher[index];
      // debugger;
      output += coded_letter;

    }
    return output

  }

}

atbash.encode('michelle')

// input: "test"
// output: 'gvhg'
