
exports.min = function min (array) {
  if ((typeof array == 'undefined') || (typeof array === 'null')){
    return 0;
  }
  else {
    Math.min.apply(null, array)}
}

exports.max = function max (array) {
  if ((typeof array == 'undefined') || (typeof array === 'null')){
    return 0;
  }
  else {
  return Math.max.apply(null, array)}
}

exports.avg = function avg (array) {
  if ((typeof array == 'undefined') || (typeof array === 'null')) {
    return 0;
  }
  else {
  let q = array.reduce(function(sum, cur) {
    return (sum + cur)
  })
  let w = array.length;
  let e = q / w;
  return e;}
}
