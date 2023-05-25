// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n){
  let diamondStr = '';
  let diamondChar = '*'
  let reverse = n - 2
  //check for valid input
  if (n % 2 != 0 && n > 0) {
  //outer loop for \n
    for (i = 0; i < n; i++) {
      //check if middle
        if (i < Math.ceil(n / 2)) {
          //spaces
          for (j = n - i - Math.ceil(n / 2); j > 0; j--) {
              diamondStr += ' '
          }
          //stars
          for (j = 0; j <= i + i; j++) {
              diamondStr += diamondChar
          }
          //after middle
        } else {
          //spaces
          for (j = 0; j < i - Math.floor(n / 2); j++) {
              diamondStr += ' '
          }
          //stars
          for (j = 0; j < reverse; j++) {
              diamondStr += diamondChar
          }
          reverse = reverse - 2
        }
      diamondStr += '\n'
      }
    return diamondStr;
    }
  return null;
}