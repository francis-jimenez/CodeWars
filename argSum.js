function sum() {
    var total = 0;
    for (i in arguments) {
      total += arguments[i];
    }
    return total;
    // return the sum of all arguments given.
  }