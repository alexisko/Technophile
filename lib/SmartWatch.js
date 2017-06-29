var extend = require('./extend');
var Watch = require('./Watch');
var Tablet = require('./Tablet');

extend(SmartWatch.prototype, Watch.prototype);
extend(SmartWatch.prototype, Tablet.prototype);

function SmartWatch() {
  Watch.call(this);
}

module.exports = SmartWatch;