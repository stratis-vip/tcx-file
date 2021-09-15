import TcxBase from "./tcx-base"
import Track from "./track"
import Pace from "./pace"
import {ILap} from "./consts";

class Lap extends TcxBase<ILap> {
    private readonly _tracks: Array<Track>
    private readonly _distanceMeters?: number
    private readonly _totalTimeSeconds?: number
    private readonly _pace?: Pace

    constructor(obj: ILap) {
        super(obj);
        this._tracks = []
        // let writeTracks = false
        // let trackId = 0
        if (this._obj.Track && this._obj.Track[0]) {
            for (const track of this._obj.Track[0].Trackpoint) {
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
                this._tracks.push(new Track(track))
                this._distanceMeters = Number(this._obj.DistanceMeters[0])
                this._totalTimeSeconds = Number(this._obj.TotalTimeSeconds[0])
                if (this._totalTimeSeconds && this._distanceMeters) {
                    this._pace = new Pace(Number(this._totalTimeSeconds) * 1000 / Number(this._distanceMeters))
                }

            }
        }
    }

    get tracks() {
        return this._tracks
    }

    get startTime() {
        return this._obj['$'].StartTime
    }

    get totalTimeSeconds() {
        return this._totalTimeSeconds
    }

    get distanceMeters() {
        return this._distanceMeters
    }

    get calories() {
        if (this._obj.Calories)
            return Number(this._obj.Calories[0])
        return undefined
    }

    get averageHeartRateBpm() {
        if (this._obj.AverageHeartRateBpm)
            return Number(this._obj.AverageHeartRateBpm[0].Value[0])
        return undefined
    }

    get maximumHeartRateBpm() {
        if (this._obj.MaximumHeartRateBpm)
            return Number(this._obj.MaximumHeartRateBpm[0].Value[0])
        return undefined
    }

    get pace() {
        return this._pace
    }

}

export default Lap
