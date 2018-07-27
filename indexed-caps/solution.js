function capitalize(s,arr){
  let newStrArr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < newStrArr.length) {
      newStrArr[arr[i]] = newStrArr[arr[i]].toUpperCase();
    }
  }
  return newStrArr.join('');
}