import Activity from "./activity";
import Lap from './lap';
import { ISummary, ITcxFileContent } from "./consts";
declare class TcxFile {
    private _data?;
    private _isValid;
    private _file?;
    private _activities;
    private _laps;
    constructor(file?: string);
    get data(): ITcxFileContent | undefined;
    get activities(): Activity[];
    get count(): number;
    get id(): string;
    get sport(): string;
    get path(): (import("./consts").IPosition | undefined)[];
    get pathForGoogleMaps(): {
        lat: string[] | undefined;
        lng: string[] | undefined;
    }[];
    get laps(): Lap[];
    get timeInSeconds(): number | undefined;
    get distanceMeters(): number | undefined;
    get pace(): any;
    get calories(): number | undefined;
    get summary(): ISummary;
}
export default TcxFile;
