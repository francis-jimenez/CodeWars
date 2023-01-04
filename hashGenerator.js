// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag (str) {
    let cap = str.split(' ').map(x => x.slice(0,1).toUpperCase() + x.slice(1, str.length))
    cap.unshift('#')
    return cap.join('').length > 140 || !str.trim() ? false : cap.join('')
  }