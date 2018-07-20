function solution(str){
  let splitStr = str.split('');
  let revArray = splitStr.reverse();
  let reversed = revArray.join('');
  return reversed;
}