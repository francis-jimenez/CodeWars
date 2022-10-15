// Count the number of divisors of a positive integer n.

function getDivisorsCnt(n){
    let counter = 0;
    for (i = 1; i <= n; i++) {
      if(Number.isInteger(n / i)) {
        counter++;
      }
    }
    return counter;
}