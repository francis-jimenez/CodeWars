// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

function squareArea(A){
    let r = (A * 4) / (2 * Math.PI)
    return r * r
  }