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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tcx_base_1 = __importDefault(require("./tcx-base"));
var position_1 = __importDefault(require("./position"));
var extensions_1 = __importDefault(require("./extensions"));
var Track = /** @class */ (function (_super) {
    __extends(Track, _super);
    function Track(obj) {
        var _this = _super.call(this, obj) || this;
        _this._position = undefined;
        _this._extensions = undefined;
        if (obj.Position) {
            _this._position = new position_1.default(__assign(__assign({}, obj.Position[0]), { Altitude: Number(obj.AltitudeMeters[0]) }));
        }
        if (obj.Extensions) {
            _this._extensions = new extensions_1.default(obj.Extensions[0]);
            console.log(_this._extensions.speed, _this._extensions.runCadence);
        }
        return _this;
    }
    Object.defineProperty(Track.prototype, "time", {
        get: function () {
            return this._obj.Time[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Track.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Track.prototype, "distanceMeters", {
        get: function () {
            return Number(this._obj.DistanceMeters[0]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Track.prototype, "heartRateBpm", {
        get: function () {
            if (this._obj.HeartRateBpm && this._obj.HeartRateBpm[0].Value) {
                return Number(this._obj.HeartRateBpm[0].Value[0]);
            }
            else
                return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Track.prototype, "extensions", {
        get: function () {
            return this._extensions;
        },
        enumerable: false,
        configurable: true
    });
    return Track;
}(tcx_base_1.default));
exports.default = Track;
//# sourceMappingURL=track.js.map