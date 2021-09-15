"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var lap_1 = require("./lap");
var tcx_base_1 = require("./tcx-base");
var Activity = /** @class */ (function (_super) {
    __extends(Activity, _super);
    function Activity(obj) {
        var _this = _super.call(this, obj) || this;
        _this._id = _this._obj.Id[0];
        _this._laps = [];
        _this._sport = _this._obj['$'].Sport;
        for (var _i = 0, _a = _this._obj.Lap; _i < _a.length; _i++) {
            var lap = _a[_i];
            _this._laps.push(new lap_1["default"](lap));
        }
        return _this;
    }
    Object.defineProperty(Activity.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Activity.prototype, "sport", {
        get: function () {
            return this._sport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Activity.prototype, "laps", {
        get: function () {
            return this._laps;
        },
        enumerable: false,
        configurable: true
    });
    return Activity;
}(tcx_base_1["default"]));
exports["default"] = Activity;
