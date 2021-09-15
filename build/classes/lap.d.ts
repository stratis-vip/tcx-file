import TcxBase from "./tcx-base";
import Track from "./track";
import Pace from "./pace";
import { ILap } from "./consts";
declare class Lap extends TcxBase<ILap> {
    private readonly _tracks;
    private readonly _distanceMeters?;
    private readonly _totalTimeSeconds?;
    private readonly _pace?;
    constructor(obj: ILap);
    get tracks(): Track[];
    get startTime(): String;
    get totalTimeSeconds(): Number | undefined;
    get distanceMeters(): Number | undefined;
    get calories(): number | undefined;
    get averageHeartRateBpm(): number | undefined;
    get maximumHeartRateBpm(): number | undefined;
    get pace(): Pace | undefined;
}
export default Lap;
