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
var tcx_base_1 = require("./tcx-base");
var Position = /** @class */ (function (_super) {
    __extends(Position, _super);
    function Position(obj) {
        var _this = _super.call(this, obj) || this;
        _this._latitudeDegrees = Number(_this._obj.LatitudeDegrees[0]);
        _this._longitudeDegrees = Number(_this._obj.LongitudeDegrees[0]);
        _this._altitudeMeters = Number(_this._obj.Altitude);
        return _this;
    }
    Object.defineProperty(Position.prototype, "latitudeDegrees", {
        get: function () {
            return this._latitudeDegrees;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Position.prototype, "longitudeDegrees", {
        get: function () {
            return this._longitudeDegrees;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Position.prototype, "altitudeMeters", {
        get: function () {
            return this._altitudeMeters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Position.prototype, "coordinates", {
        get: function () {
            return {
                latitudeDegrees: this._latitudeDegrees,
                longitudeDegrees: this._longitudeDegrees,
                altitudeMeters: this._altitudeMeters
            };
        },
        enumerable: false,
        configurable: true
    });
    return Position;
}(tcx_base_1["default"]));
exports["default"] = Position;
