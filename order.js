function order(words){
    //creating new array
    let orderedArr = [];
    //spliting words
    let wordArr = words.split(" ");
    //setting number to identify
    for (i = 1; i <= wordArr.length; i++) {
      //looping through words to find number and pushing it to new array
      for (j = 0; j < wordArr.length; j++) {
        if (wordArr[j].includes(i)) {
          orderedArr.push(wordArr[j]);
        }
      }
    }
    return orderedArr.join(" ");
    // ...
  }