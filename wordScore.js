function high(x){
    //settings array of scores per word
    let wordScore = [];
    //index for highest scoring word
    let winnerIndex = 0;
    let largestWord = 0;
    let letterScore = 0;
    let words = x.split(" ");
    //looping through every word
    for (i = 0; i < words.length; i++) {
      //looping through letters and gathering scores
      for (j = 0; j < words[i].length; j++) {
        letterScore += words[i].charCodeAt(j) - 96;
        wordScore[i] = letterScore
      }
       
  //     selecting highest scoring word
      if (wordScore[i] > largestWord) {
        largestWord = wordScore[i]
        winnerIndex = i;
      }
      letterScore = 0;
    }
    //returning index of largest scoring word
    return words[winnerIndex];
    }