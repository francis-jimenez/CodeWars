// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

function findEvenIndex(arr)
{
  for (i = 0; i < arr.length; i++) {
    let first = arr.slice(0, i).reduce((acc, c) => acc + c, 0)
    let second = arr.slice(i + 1).reduce((acc, c) => acc + c, 0)
    if (first == second) {
      return i;
    }
  }
  return -1;
}