function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
      return []
    }
    let positives = 0;
    let negatives = 0;
    input.forEach(element => {
      if (element < 0) {
        negatives += element;
      }
      else if (element > 0){
        positives ++;
      }
    })
    return new Array(positives, negatives)
  }