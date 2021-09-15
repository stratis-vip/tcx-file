import Lap from "./lap";
import TcxBase from "./tcx-base";
import { IActivity } from "./consts";
declare class Activity extends TcxBase<IActivity> {
    private readonly _laps;
    private readonly _id;
    private readonly _sport;
    constructor(obj: IActivity);
    get id(): string;
    get sport(): string;
    get laps(): Lap[];
}
export default Activity;
