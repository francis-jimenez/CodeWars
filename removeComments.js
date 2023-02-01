// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers) {
    while (markers.some(x => input.indexOf(x) >= 0)) {
      let startIndex = 0
      let deleteIndex = 0
        for (i = 0; i < input.length; i++) {
          if (startIndex > 0 && deleteIndex > 0) break;
          if (markers.includes(input[i])) {
            startIndex = i
          } else if (input[i] == '\n' && startIndex > 0) {
            deleteIndex = i
          } else if (i == input.length - 1) {
            deleteIndex = i
          }
        }
      input = input.substring(0,startIndex - 1) +  input.substring(deleteIndex, input.length - 1)
    }
      return input
  };