function capitalize(s){
  let oddCaps = s[0];
  let evenCaps = s[0].toUpperCase();
  console.log(evenCaps);
  for (let i = 1; i < s.length; i++) {
    if (i % 2 === 0) {
      evenCaps += s[i].toUpperCase();
      oddCaps += s[i];
    } else {
      evenCaps += s[i];
      oddCaps += s[i].toUpperCase();
    }
  }
  return [evenCaps, oddCaps];
}