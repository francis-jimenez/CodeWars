// Find the smallest integer in the array
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallestInt = args[0];
      args.forEach(num => {
        if (smallestInt > num) {
          smallestInt = num
        }
      })
      return smallestInt;
    }
  }