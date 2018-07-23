function double(array) {
  return array.map(x => x * 2);
}

function filter_list(l) {
  return l.filter(function(l){
    return typeof l == "number"
});
}

function find_average(array) {
  let total = (accumulator, currentValue) => accumulator + currentValue;
  return array.reduce(total) / array.length;
}