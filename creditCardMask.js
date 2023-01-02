// return masked string
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
function maskify(cc) {
    return cc.slice(-4).padStart(cc.length, '#')
  }
  