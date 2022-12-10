function validParentheses(parens) {
  let valid = 0
  parens = parens.split('')
  
  for (i = 0; i < parens.length; i++) {
    if (parens[i] == '(') valid++;
    if (parens[i] == ')') valid--;
    if (valid == -1) return false
  } 
  return valid == 0
}