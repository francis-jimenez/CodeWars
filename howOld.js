function  calculateAge(p, f) {
  
  if (p == f) return 'You were born this very year!'
  let year = Math.abs(p - f) == 1 ? 'year' : 'years'
  if (p < f) return `You are ${f - p} ${year} old.`
  if (p > f) return `You will be born in ${p - f} ${year}.`
  
}

