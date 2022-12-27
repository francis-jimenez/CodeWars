function tribonacci(signature,n){
    let sec = [];
      for (i = 0; i < n; i++) {
        sec.length < 3 ? sec.push(signature[i]) : sec.push(sec[i - 1] + sec[i - 2] + sec[i - 3])
        }
    return sec
  }