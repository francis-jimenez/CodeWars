// You get an array of numbers, return the sum of all of the positives ones
function positiveSum(arr) {
    let sum = 0;
    arr.forEach(num => num >= 1 ? sum += num : null)
    return sum
  }