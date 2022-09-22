// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
  
    let letterPosition = "";
    
    for (i = 0; i <= text.length; i++) {
      
      if (text.toUpperCase().charCodeAt(i) >= 65 && text.toUpperCase().charCodeAt(i) <= 90) {
    
          letterPosition += ` ${text.toUpperCase().charCodeAt(i) - 64}`;
        } 
    }
    return letterPosition.substring(1);
  }