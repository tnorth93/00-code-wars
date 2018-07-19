function sortNumber(a,b) {
  return a - b;
}

var gimme = function (inputArray) {
  let originalArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    originalArray.push(inputArray[i]);
  }
  inputArray.sort(sortNumber);
  let correctNumber = inputArray[1];
  let correctIndex = originalArray.indexOf(correctNumber);
  return correctIndex;
};

gimme();