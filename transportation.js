// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
    // Your solution here
    let dailyCost = 40;
    //less than 2 days
    if (d <= 2) {
      return dailyCost * d;
    }
    //less than 7 and more than 2 days
    else if(d > 2 && d < 7) {
      return dailyCost * d - 20;
    }
    //7 or more days
    else if(d >= 7) {
      return dailyCost * d - 50;
    }
  }