// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
    for (i = 0; i < string.length; i++) {
      
      if (string[i] === string[i].toUpperCase()) {
        string = string.substring(0, i) + " " + string.substring(i);
        i++;
      }
  }
  return string;
}
