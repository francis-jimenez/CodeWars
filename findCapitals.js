// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
	return word.split('').map((x, i) => {
    if( x === x.toUpperCase()) return i
  }).filter((x, i) => Number.isInteger(x))
};v