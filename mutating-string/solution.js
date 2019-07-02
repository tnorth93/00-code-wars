function mutateMyStrings(stringOne, stringTwo){
  var splitOne = stringOne.split('');
  var splitTwo = stringTwo.split('');
  var splitString = [splitOne.join('')];
  for(let i = 0; i < stringOne.length; i++) {
    if(splitOne[i] !== splitTwo[i]) {
      splitOne[i] = splitTwo[i];
      splitString.push(splitOne.join(''));
    }
  }
  return splitString.join('\n') + '\n';
}