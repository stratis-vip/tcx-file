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
var track_1 = require("./track");
var pace_1 = require("./pace");
var Lap = /** @class */ (function (_super) {
    __extends(Lap, _super);
    function Lap(obj) {
        var _this = _super.call(this, obj) || this;
        _this._tracks = [];
        // let writeTracks = false
        // let trackId = 0
        if (_this._obj.Track && _this._obj.Track[0]) {
            for (var _i = 0, _a = _this._obj.Track[0].Trackpoint; _i < _a.length; _i++) {
                var track = _a[_i];
                // trackId++  Trackpoint
                // const t = new Track(track)
                // TODO ελεγχος για μηδενικά σημεία
                // if (t.distanceMeters > 0 && t.extensions.speed === 0) {
                //     writeTracks = true
                // }
                // if (writeTracks) {
                //
                //     console.log(trackId, t.distanceMeters, JSON.stringify(t))
                //     if (t.extensions.speed > 0){
                //         writeTracks = false
                //     }
                // }
                _this._tracks.push(new track_1["default"](track));
                _this._distanceMeters = Number(_this._obj.DistanceMeters[0]);
                _this._totalTimeSeconds = Number(_this._obj.TotalTimeSeconds[0]);
                if (_this._totalTimeSeconds && _this._distanceMeters) {
                    _this._pace = new pace_1["default"](Number(_this._totalTimeSeconds) * 1000 / Number(_this._distanceMeters));
                }
            }
        }
        return _this;
    }
    Object.defineProperty(Lap.prototype, "tracks", {
        get: function () {
            return this._tracks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lap.prototype, "startTime", {
        get: function () {
            return this._obj['$'].StartTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lap.prototype, "totalTimeSeconds", {
        get: function () {
            return this._totalTimeSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lap.prototype, "distanceMeters", {
        get: function () {
            return this._distanceMeters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lap.prototype, "calories", {
        get: function () {
            if (this._obj.Calories)
                return Number(this._obj.Calories[0]);
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lap.prototype, "averageHeartRateBpm", {
        get: function () {
            if (this._obj.AverageHeartRateBpm)
                return Number(this._obj.AverageHeartRateBpm[0].Value[0]);
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lap.prototype, "maximumHeartRateBpm", {
        get: function () {
            if (this._obj.MaximumHeartRateBpm)
                return Number(this._obj.MaximumHeartRateBpm[0].Value[0]);
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lap.prototype, "pace", {
        get: function () {
            return this._pace;
        },
        enumerable: false,
        configurable: true
    });
    return Lap;
}(tcx_base_1["default"]));
exports["default"] = Lap;
