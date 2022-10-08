// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(array1, array2){
    //set initial status
    let status = false;
    //check for null arrays
    if (array1 === null || array2 === null) {
          return false;
        }
    //check for no length array
    if (array1.length === 0 && array2.length === 0) {
      return true
    }
    //loop through arrays
    for (i = 0; i < array1.length; i++) {
      
      for (j = 0; j < array1.length; j++) {
        //check for square of array1 and remove number from array
        if (array2[j] == Math.pow(array1[i], 2) ){
          status = true;
          array2[j] = 'no';
          break;
        }
        
        else {
          status = false;
        }
        //check if it's last iteration of array
        if (j + 1 === array2.length && status === false) {
          return false;
        }
      }  
    }
    return status
  }