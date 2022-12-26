function narcissistic(value) {
  
    let splVal = value.toString().split('')
    let digits = splVal.length
    let sum = 0;
    splVal.forEach(x => {
      sum += Math.pow(x, digits)
    })
    return sum == value ? true : false
  }
  