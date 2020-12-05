var OPS = require('./index.js')

var map = {}
for (var op in OPS) {
  var code = OPS[op]
  map[code] = op
}

export default map;
