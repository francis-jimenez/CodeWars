function duplicateCount(text){
    let repChars = 0;
    let charObject = text.toLowerCase().split('').reduce((object, char) => {
      if (object[char] == null) object[char] = []
      object[char].push(char)
      return object
    }, {})
    for (char in charObject) {
      if (charObject[char].length > 1) {
         repChars++     
      }
    }
    return repChars
  }