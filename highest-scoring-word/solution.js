function high(x){
  let scoreArr = [];
  let myArr = x.split(' ');
  for (let i = 0; i < myArr.length; i++) {
    let indiScore = 0;
    for (let b = 0; b < myArr[i].length; b++) {
      indiScore += (myArr[i].charCodeAt(b) - 96);
    }
    scoreArr.push(indiScore);
  }
  let highScore = Math.max(...scoreArr);
  let highScoreIndex = scoreArr.indexOf(highScore);
  return myArr[highScoreIndex];
}