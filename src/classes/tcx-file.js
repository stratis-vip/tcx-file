"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var activity_1 = require("./activity");
var Pace = require("./pace");
var xml2js_1 = require("xml2js");
var TcxFile = /** @class */ (function () {
    function TcxFile(file) {
        var _this = this;
        this._isValid = false;
        this._activities = [];
        this._laps = [];
        if (!file) {
            throw new Error('No file!');
        }
        if (!fs_1["default"].existsSync(file)) {
            throw new Error("File \"" + file + "\" not Exists");
        }
        try {
            var a = fs_1["default"].readFileSync(file, 'utf8');
            xml2js_1.parseString(a, function (err, result) {
                if (err) {
                    throw new Error(err.message);
                }
                if (!(result === null || result === void 0 ? void 0 : result.TrainingCenterDatabase)) {
                    throw new Error("\"" + _this._file + "\" is not a valid tcx/gpx file!");
                }
                _this._data = result;
                var acts = result.TrainingCenterDatabase.Activities[0].Activity;
                for (var _i = 0, acts_1 = acts; _i < acts_1.length; _i++) {
                    var act = acts_1[_i];
                    _this._activities.push(new activity_1["default"](act));
                }
                _this._laps = [];
                for (var _a = 0, _b = _this._activities; _a < _b.length; _a++) {
                    var activity = _b[_a];
                    for (var _c = 0, _d = activity.laps; _c < _d.length; _c++) {
                        var lap = _d[_c];
                        _this._laps.push(lap);
                    }
                }
                _this._isValid = true;
            });
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    Object.defineProperty(TcxFile.prototype, "data", {
        get: function () {
            if (!this._isValid) {
                throw new Error("\"" + this._file + "\" is not a valid tcx/gpx file!");
            }
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TcxFile.prototype, "activities", {
        get: function () {
            if (!this._isValid) {
                throw new Error("\"" + this._file + "\" is not a valid tcx/gpx file!");
            }
            return this._activities;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TcxFile.prototype, "count", {
        get: function () {
            return this._activities.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TcxFile.prototype, "id", {
        get: function () {
            return this._activities[0].id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TcxFile.prototype, "sport", {
        get: function () {
            return this._activities[0].sport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TcxFile.prototype, "path", {
        get: function () {
            var activity = this._activities[0];
            var laps = [];
            for (var _i = 0, _a = activity.laps; _i < _a.length; _i++) {
                var lap = _a[_i];
                laps.push.apply(laps, lap.tracks);
            }
            return laps.filter(function (t) { return t.position; }).map(function (tr) { var _a; return (_a = tr.position) === null || _a === void 0 ? void 0 : _a.valueOf(); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TcxFile.prototype, "pathForGoogleMaps", {
        get: function () {
            var originalPath = this.path;
            return originalPath.map(function (t) {
                return { lat: t === null || t === void 0 ? void 0 : t.LatitudeDegrees, lng: t === null || t === void 0 ? void 0 : t.LongitudeDegrees };
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TcxFile.prototype, "laps", {
        get: function () {
            return this._laps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TcxFile.prototype, "timeInSeconds", {
        get: function () {
            return this._laps.map(function (l) { return l.totalTimeSeconds; }).reduce(function (a, b) { return Number(a) + Number(b); }, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TcxFile.prototype, "distanceMeters", {
        get: function () {
            return this._laps.map(function (l) { return l.distanceMeters; }).reduce(function (a, b) { return Number(a) + Number(b); }, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TcxFile.prototype, "pace", {
        get: function () {
            return new Pace(Number(this.timeInSeconds) * 1000 / Number(this.distanceMeters));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TcxFile.prototype, "calories", {
        get: function () {
            return this._laps.map(function (l) { return l.calories; }).reduce(function (a, b) { return Number(a) + Number(b); }, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TcxFile.prototype, "summary", {
        get: function () {
            var _a, _b;
            return {
                sport: this.sport,
                timeInSeconds: this.timeInSeconds,
                distanceMeters: this.distanceMeters,
                calories: this.calories,
                date: this._laps[0].startTime,
                startPosition: {
                    lat: ((_a = this._laps[0].tracks[0].position) === null || _a === void 0 ? void 0 : _a.latitudeDegrees) || null,
                    lng: ((_b = this._laps[0].tracks[0].position) === null || _b === void 0 ? void 0 : _b.longitudeDegrees) || null
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    return TcxFile;
}());
exports["default"] = TcxFile;
