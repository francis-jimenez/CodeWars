function reverseWords(str) {
    // Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
    let reverseWord = str.split(" ").map(word => word.split("").reverse().join(""))
    return reverseWord.join(" ");
  }