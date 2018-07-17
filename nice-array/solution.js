function isNice(arr){
  let truthArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)) {
      truthArr.push(true);
    } else {
      truthArr.push(false);
    }
  } 
  if (truthArr.includes(false) || arr.length < 1) {
    return false;
  } else {
    return true;
  }
}