import TcxBase from "./tcx-base";
import Position from "./position";
import Extensions from "./extensions";
import { ITrackPoint } from "./consts";
declare class Track extends TcxBase<ITrackPoint> {
    private readonly _position?;
    private readonly _extensions?;
    constructor(obj: ITrackPoint);
    get time(): String;
    get position(): Position | undefined;
    get distanceMeters(): number;
    get heartRateBpm(): number | undefined;
    get extensions(): Extensions | undefined;
}
export default Track;
