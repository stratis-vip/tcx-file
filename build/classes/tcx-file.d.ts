import Activity from "./activity";
import Lap from './lap';
import { ITcxFileContent } from "./consts";
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
    get id(): String;
    get sport(): String;
    get path(): (import("./consts").IPosition | undefined)[];
    get pathForGoogleMaps(): {
        lat: String[] | undefined;
        lng: String[] | undefined;
    }[];
    get laps(): Lap[];
    get timeInSeconds(): Number | undefined;
    get distanceMeters(): Number | undefined;
    get pace(): any;
    get calories(): number | undefined;
    get summary(): {
        sport: String;
        timeInSeconds: Number | undefined;
        distanceMeters: Number | undefined;
        calories: number | undefined;
        date: String;
        startPosition: {
            lat: Number | null;
            lng: Number | null;
        };
    };
}
export default TcxFile;
