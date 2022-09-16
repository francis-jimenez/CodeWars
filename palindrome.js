//Write a function that checks if a given string (case insensitive) is a palindrome.
function isPalindrome(x) {
    // your code here
    let reverseString = x.split("").reverse().join("").toLowerCase();
    return x.toLowerCase() === reverseString ? true : false;
  }