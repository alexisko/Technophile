var extend = require('./extend');
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');

extend(NintendoDS.prototype, GameConsole.prototype);
extend(NintendoDS.prototype, WebBrowser.prototype);

function NintendoDS() {
  GameConsole.call(this, 'Nintendo DS');
}

// NO
// NintendoDS.prototype = Object.create(GameConsole.prototype, WebBrowser.prototype);
// NintendoDS.prototype.constructor = NintendoDS;

module.exports = NintendoDS;