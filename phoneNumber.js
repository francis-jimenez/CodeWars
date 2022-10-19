// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers){
    const numString = numbers.join('');
    return `(${numString.slice(0, 3)}) ${numString.slice(3, 6)}-${numString.slice(6)}`;
  }