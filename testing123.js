// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

var number = array => {
    return array.map((x, i) => `${i + 1}: ${x}`)
  }