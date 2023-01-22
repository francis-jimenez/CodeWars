"use strict";
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].


function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b)
}