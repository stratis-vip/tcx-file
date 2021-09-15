import  Lap from "./lap"
import TcxBase from "./tcx-base";
import {IActivity} from "./consts";

class Activity extends TcxBase<IActivity> {
    private readonly  _laps:Array<Lap>
    private readonly _id:String
    private readonly _sport:String

    constructor(obj:IActivity) {
        super(obj);
        this._id = this._obj.Id[0]
        this._laps = []
        this._sport = this._obj['$'].Sport
        for (const lap of this._obj.Lap) {
            this._laps.push(new Lap(lap))
        }
    }

    get id() {
        return this._id
    }

    get sport() {
        return this._sport
    }

    get laps(){
        return this._laps
    }
}

export default Activity
