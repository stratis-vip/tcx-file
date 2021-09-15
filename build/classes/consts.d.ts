declare type StringArray = Array<String>;
declare type NumberArray = Array<Number>;
export interface GeoCordinates {
    latitudeDegrees: Number;
    longitudeDegrees: Number;
    altitudeMeters: Number;
}
export interface ITcxFileContent {
    TrainingCenterDatabase: ITrainingCenterDatabase;
}
export interface ITrainingCenterDatabase {
    $: {
        [index: string]: string;
    };
    Activities: Array<{
        Activity: Array<IActivity>;
    }>;
}
export interface IValue {
    Value: Array<String>;
}
export interface IPosition {
    LatitudeDegrees: StringArray;
    LongitudeDegrees: StringArray;
    Altitude?: Number;
}
export interface IExtensions {
    "ns3:TPX": Array<{
        "ns3:RunCadence": NumberArray;
        "ns3:Speed": NumberArray;
    }>;
}
export interface ITrackPoint {
    Time: StringArray;
    Position?: Array<IPosition>;
    AltitudeMeters: StringArray;
    DistanceMeters: StringArray;
    Extensions: Array<IExtensions>;
    HeartRateBpm?: Array<IValue>;
}
export interface ILap {
    $: {
        StartTime: String;
    };
    TotalTimeSeconds: StringArray;
    DistanceMeters: StringArray;
    Calories?: StringArray;
    AverageHeartRateBpm?: Array<IValue>;
    MaximumHeartRateBpm?: Array<IValue>;
    Intensity?: StringArray;
    TriggerMethod?: StringArray;
    Track?: Array<{
        Trackpoint: Array<ITrackPoint>;
    }>;
}
export interface IActivity {
    $: {
        Sport: String;
    };
    Id: StringArray;
    Lap: Array<ILap>;
}
export interface ISummary {
    sport: String;
    timeInSeconds: Number;
    distanceMeters: Number;
    calories?: Number;
    date: String;
    startPosition: {
        lat: Number | null;
        lng: Number | null;
    };
}
export {};
