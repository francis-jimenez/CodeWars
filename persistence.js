// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
    let counter = 0
    while (num > 9) {
      num = num.toString().split('').reduce((acc, x) => acc * Number(x), 1)
      counter ++
    } return counter  
  }