// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
    let tower = new Array(nFloors);
    for (col = 0, row = 1; col < nFloors; col++, row++) {
          tower[col] = `${' '.repeat(nFloors - row)}${'*'.repeat(row * 2 - 1)}${' '.repeat(nFloors - row)}`
      } 
    return tower
  }