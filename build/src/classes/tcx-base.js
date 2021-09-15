"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TcxBase = /** @class */ (function () {
    function TcxBase(obj) {
        if (!obj)
            throw new Error('Object Required');
        this._obj = obj;
    }
    TcxBase.prototype.valueOf = function () {
        return this._obj;
    };
    return TcxBase;
}());
exports.default = TcxBase;
//# sourceMappingURL=tcx-base.js.map