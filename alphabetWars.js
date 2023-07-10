function alphabetWar(fight)

{
  const left = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
    points: 0
  }
  
  const right = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
    points: 0
  }
  
  fight.split('').forEach(x => {
    if (Object.hasOwn(left, x)) {
      left.points += left[x];
    }
    else if (Object.hasOwn(right, x)) {
      right.points += right[x];
    }
  })
   return left.points > right.points ? "Left side wins!" :
          right.points > left.points ? "Right side wins!":
          "Let's fight again!";
}