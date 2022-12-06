// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (str) {
    let numStr
    let numIndex
    str = str.split('')
    for (i = str.length - 1; i >= 0; i--) {
      if (str[i].toLowerCase() !== str[i].toUpperCase()) {
        numIndex = i + 1
        break;
      }
    }
  
    numStr = str.slice(numIndex, str.length)
    let charStr = str.slice(0, numIndex).join('')
  
    //OPERATIONS
    
    //if no numbers in string
    if (!numStr.length) return charStr + 1
    
    //if no char in string
    if (numStr.join('') == charStr) {
      numStr = numStr.slice(0, i - 1) + (parseInt(numStr.join('')) + 1);
      return numStr
    }
    
    
    for (i = 0; i < numStr.length; i++) {
      
      if (numStr[i] != 0) {
        //if num == 9 and has zeroes before op starts
        if (numStr[i] == 9 && numStr[i - 1] == 0) {
          numStr = numStr.slice(0, i - 1) + (parseInt(numStr.join('')) + 1);
          console.log('1st')
          break;        
        } 
        //if number equals any value
        else if (numStr[i - 1] == 0) {
          numStr = numStr.slice(0, i).join('') + (parseInt(numStr.join('')) + 1);
          console.log(numStr)
          break;
        }
        else {
          numStr = parseInt(numStr.join('')) + 1
          console.log('2nd')
          break;
        }
        //if all numbers equals to 0
      } if (i == numStr.length - 1) {
         numStr = numStr.slice(0, i - 1) + parseInt(numStr.join('')) + 1;
        console.log('3rd')
        break;
      }
    } 
    
    return charStr + numStr
  }