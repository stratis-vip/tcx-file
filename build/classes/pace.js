"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Duration = require('luxon').Duration;
var Pace = /** @class */ (function () {
    function Pace(secs) {
        this._secs = secs || 0;
    }
    Pace.prototype.toString = function () {
        return Duration.fromMillis(this._secs * 1000).toFormat('hh:mm:ss.S');
    };
    Pace.prototype.valueOf = function () {
        return this._secs;
    };
    return Pace;
}());
exports.default = Pace;
//# sourceMappingURL=pace.js.map