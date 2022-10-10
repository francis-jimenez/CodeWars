function partlist(arr) {
    //set array of arrays of predetermined length
    let bigArray =  Array.from(Array(arr.length - 1), () => new Array(2));
    let smallArray = []
    //iterate through words and adding it to temp array
    for (i = 0; i < arr.length - 1; i++) {
      smallArray[0] = arr.slice(0, i + 1).join(' ');
      smallArray[1] = arr.slice(i + 1, arr.length).join(' ');
      bigArray[i][0] = smallArray[0];
      bigArray[i][1] = smallArray[1];
    }
    return bigArray;
  }