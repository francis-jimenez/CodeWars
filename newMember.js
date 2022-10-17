// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

function openOrSenior(data){
    let newArr = [];
    for (i = 0; i < data.length; i++) {
      for (j = 0; j < data[i].length; j++) {
        if (data[i][j] > 54 && data[i][j + 1] > 7) {
          newArr[i] = 'Senior';
          break;
        }
        
        else {
          newArr[i] = 'Open';
          break;
        }
      }
    }
    return newArr;
  }