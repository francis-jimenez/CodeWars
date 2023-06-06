function vowelIndices(word){
  let vowels = /a|e|i|o|u|y/g
  let newArr = []
  word.toLowerCase().split('').forEach((x,i) => x.search(vowels) == 0 ? newArr.push(i + 1) : null)
  return newArr;
}