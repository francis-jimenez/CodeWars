var isSquare = function(n){
    //Getting square root of n
    let squareRoot = Math.sqrt(n)
    //Deciding if n is perfect square
    return squareRoot % 1 === 0 ? true : false
  }