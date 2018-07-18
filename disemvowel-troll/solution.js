function disemvowel(str) {
  let newString = str.replace(/[aeiouAEIOU]/g, '');
  return newString;
}