var uniqueInOrder=function(iterable){
    let newArray = [];
    //looping through array.
     for (i = 0; i < iterable.length; i++) {
       //if element is unique add it to new array.
       if (iterable[i] != iterable[i + 1]) {
         newArray.push(iterable[i]);
       }
     }
    return newArray;
  }