// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

function score( dice ) {
    let tripleCount = 0;
    let total = 0;
    
    let diceObj = dice.reduce((obj, num) => {
      obj[num] ? obj[num]++ : obj[num] = 1;
        return obj;   
    }, {})
    
    for (num in diceObj) {
      if (diceObj[num] >= 3) {
        tripleCount = num;
        diceObj[num] -= 3;
        num == 1 ? total += tripleCount * 1000 : total += tripleCount * 100;
      }
      
    }
      if (diceObj[1] > 0) {
        total += diceObj[1] * 100;
      }
      
      if (diceObj[5] > 0) {
        total += diceObj[5] * 5 * 10;
      }
    return total;
  }