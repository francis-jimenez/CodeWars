function findOdd(A) {
    //establishing how many times a number is repeated
    let obj = {}
    for(i = 0; i < A.length; i++) {
      var l = A[i]
      obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
  }
    
    //finding out the odd number and returning it
    for (num in obj) {
      if (obj[num] % 2 !== 0) {
        return Number(num)
      }    
    }
  
  
  }