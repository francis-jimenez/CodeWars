// our task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
    //search for vowels disregarding capitalization and replace with no characters
    return str.replace(/[aeiou]/gi, "");
  }