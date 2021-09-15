import TcxBase from "./tcx-base";
import { GeoCordinates, IPosition } from "./consts";
declare class Position extends TcxBase<IPosition> {
    private readonly _latitudeDegrees;
    private readonly _longitudeDegrees;
    private readonly _altitudeMeters;
    constructor(obj: IPosition);
    get latitudeDegrees(): Number;
    get longitudeDegrees(): Number;
    get altitudeMeters(): Number;
    get coordinates(): GeoCordinates;
}
export default Position;
