// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
    return str.split(' ').map(x => {
      let firstChar = x.slice(0, 1);
      if (x.toLowerCase() != x.toUpperCase()) {
      x = x.split('').splice(1, x.length)
        return x.join('') + firstChar + 'ay'     
      } else {
        return x;
      }
    }).join(' ')
  }