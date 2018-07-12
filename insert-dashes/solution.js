function insertDash(num) {
  var numArray = num.toString().split('');
  let poppedArr = [];
  let dashArray = [];
  for (i = 0; i < numArray.length - 1; i++) {
    if (numArray[i] % 2 !== 0 && numArray[i + 1] % 2 !== 0) {
      dashArray.push(i + 1);
    }
  }
  for (i = 0; i < dashArray.length; i++) {
    numArray.splice(dashArray[i], 0, '-');
    poppedArr.push(numArray.shift());
  }
  let newArr = poppedArr.concat(numArray);
  let stringArr = newArr.join('');
  return stringArr;
}