// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the
// order they occur in the string t. You can assume t will not have repetitive
// characters. For s = "weather" and t = "therapyw", the output should be
// sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output
// should be sortByString(s, t) = "oodg".

function sortByString(s,t) {
  let newStringOrder = '';
  for (let i = 0; i < t.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (t[i] === s[j]){
        newStringOrder+=t[i];
      }
    }
  }
  return newStringOrder;
}

console.log(sortByString('weather', 'therapyw'))