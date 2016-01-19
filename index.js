var _ = require('lodash')

function splitArr (a, n) {
  var len = a.length
  var out = []
  var i = 0

  while (i < len) {
    var size = Math.ceil((len - i) / n--)
    out.push(a.slice(i, i += size))
  }
  return out
}

function shuffleAndGroup (arr, num) {
  return splitArr(_.shuffle(arr), num)
}

module.exports = shuffleAndGroup
