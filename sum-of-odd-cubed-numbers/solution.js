oddArr = [];
cubedArr = [];
function cubeOdd(arr) {
  if (!arr.every(x => (typeof(x) === 'number'))) return undefined;
  if (arr.length < 1) return 0;
  oddArr = arr.filter(x => x % 2 !== 0)
  cubedArr = oddArr.map(x => Math.pow(x, 3));
  if (arr.length > 0) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return cubedArr.reduce(reducer);
  }
}