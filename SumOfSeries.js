function SeriesSum(n)
{
  let divisor = 1;
  let sum = 1;
  
  //if number is 0
  if (n == 0) {
    return '0.00'
  }
  
  //looping through nth term
  else {
    for (i = 1; i < n; i++) {
      divisor = divisor + 3;
      sum = sum + (1/divisor)    
    }
    
    // round to 2 decimals and converting to string
    return sum.toFixed(2)
  }
}