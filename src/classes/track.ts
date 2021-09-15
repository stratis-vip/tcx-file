import TcxBase from "./tcx-base"
import Position from "./position"
import  Extensions from "./extensions"
import {ITrackPoint} from "./consts";

class Track extends TcxBase<ITrackPoint> {
    private readonly  _position?: Position
    private readonly  _extensions?: Extensions

    constructor(obj:ITrackPoint) {
        super(obj);
        this._position = undefined
        this._extensions = undefined
        if (obj.Position){
            this._position = new Position({...obj.Position[0], Altitude: Number(obj.AltitudeMeters[0])})
        }
        if (obj.Extensions){
            this._extensions = new Extensions(obj.Extensions[0])
            // console.log(this._extensions.speed, this._extensions.runCadence)
        }
    }

    get time(){
        return this._obj.Time[0]
    }

    get position(){
        return this._position
    }

    get distanceMeters(){
        return Number(this._obj.DistanceMeters[0])
    }

    get heartRateBpm(){
        if (this._obj.HeartRateBpm && this._obj.HeartRateBpm[0].Value) {
            return Number(this._obj.HeartRateBpm[0].Value[0])
        } else return undefined
    }

    get extensions(){
        return this._extensions
    }
}

export default Track
