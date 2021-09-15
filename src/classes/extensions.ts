import TcxBase from "./tcx-base";
import {IExtensions} from "./consts";

class Extensions extends TcxBase<IExtensions> {
    constructor(obj:IExtensions) {
        super(obj)
    }

    get speed(){
        if (this._obj && this._obj['ns3:TPX'][0] &&  this._obj['ns3:TPX'][0]['ns3:Speed']) {
            return Number((this._obj as IExtensions)["ns3:TPX"][0]['ns3:Speed'][0])
        } else return undefined
    }

    get runCadence(){
        if (this._obj && this._obj['ns3:TPX'][0] &&  this._obj['ns3:TPX'][0]['ns3:RunCadence']) {
            return Number((this._obj as IExtensions)["ns3:TPX"][0]['ns3:RunCadence'][0])
        } else return undefined
    }
}

export default Extensions
