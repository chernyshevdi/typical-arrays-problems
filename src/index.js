
exports.min = function min (array) {

    Math.min.apply(null, array)
}

exports.max = function max (array) {

  return Math.max.apply(null, array)
}

exports.avg = function avg (array) {

  let q = array.reduce(function(sum, cur) {
    return (sum + cur)
  })
  let w = array.length;
  let e = q / w;
  return e;
}
