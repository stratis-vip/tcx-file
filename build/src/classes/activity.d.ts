import Lap from "./lap";
import TcxBase from "./tcx-base";
import { IActivity } from "./consts";
declare class Activity extends TcxBase<IActivity> {
    private readonly _laps;
    private readonly _id;
    private readonly _sport;
    constructor(obj: IActivity);
    get id(): String;
    get sport(): String;
    get laps(): Lap[];
}
export default Activity;
//# sourceMappingURL=activity.d.ts.map