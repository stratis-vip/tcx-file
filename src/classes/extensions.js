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
var Extensions = /** @class */ (function (_super) {
    __extends(Extensions, _super);
    function Extensions(obj) {
        return _super.call(this, obj) || this;
    }
    Object.defineProperty(Extensions.prototype, "speed", {
        get: function () {
            if (this._obj && this._obj['ns3:TPX'][0] && this._obj['ns3:TPX'][0]['ns3:Speed']) {
                return Number(this._obj["ns3:TPX"][0]['ns3:Speed'][0]);
            }
            else
                return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Extensions.prototype, "runCadence", {
        get: function () {
            if (this._obj && this._obj['ns3:TPX'][0] && this._obj['ns3:TPX'][0]['ns3:RunCadence']) {
                return Number(this._obj["ns3:TPX"][0]['ns3:RunCadence'][0]);
            }
            else
                return undefined;
        },
        enumerable: false,
        configurable: true
    });
    return Extensions;
}(tcx_base_1["default"]));
exports["default"] = Extensions;
