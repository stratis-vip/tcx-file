"use strict";
exports.__esModule = true;
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
exports["default"] = TcxBase;
