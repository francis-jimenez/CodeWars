// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
    let zeroArr = arr.filter(x => x === 0)
    let noZeroArr = arr.filter(x => x !== 0)
    return noZeroArr.concat(zeroArr)
  }