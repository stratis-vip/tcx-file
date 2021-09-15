import  TcxBase from "./tcx-base"
import {GeoCordinates, IPosition} from "./consts";

class Position extends TcxBase<IPosition> {
    private readonly _latitudeDegrees: number
    private readonly _longitudeDegrees: number
    private readonly _altitudeMeters: number

    constructor(obj:IPosition) {
        super(obj);
        this._latitudeDegrees = Number(this._obj.LatitudeDegrees[0])
        this._longitudeDegrees = Number(this._obj.LongitudeDegrees[0])
        this._altitudeMeters = Number(this._obj.Altitude)
    }

    get latitudeDegrees() {
        return this._latitudeDegrees
    }

    get longitudeDegrees() {
        return this._longitudeDegrees
    }

    get altitudeMeters() {
        return this._altitudeMeters
    }

    get coordinates():GeoCordinates {
        return {
            latitudeDegrees: this._latitudeDegrees,
            longitudeDegrees: this._longitudeDegrees,
            altitudeMeters:this._altitudeMeters,
        }
    }


}

export default  Position
