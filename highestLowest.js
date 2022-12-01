// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.



function highAndLow(numbers){
    let highest = numbers.split(' ').sort((a, b) => a - b).pop()
    let lowest = numbers.split(' ').sort((a, b) => a - b).shift()
    return `${highest} ${lowest}`
  }