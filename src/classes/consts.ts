

type StringArray = Array<string>
type NumberArray = Array<number>

export interface GeoCordinates {
    latitudeDegrees: number
    longitudeDegrees: number
    altitudeMeters: number
}

export interface ITcxFileContent {
    TrainingCenterDatabase: ITrainingCenterDatabase
}

export interface ITrainingCenterDatabase {
    $: { [index: string]: string }
    Activities: Array<{
        Activity: Array<IActivity>
    }>
}


export interface IValue {
    Value: Array<string>
}

export interface IPosition {
    LatitudeDegrees: StringArray
    LongitudeDegrees: StringArray
    Altitude?: number
}

export interface IExtensions {
    "ns3:TPX": Array<{
        "ns3:RunCadence": NumberArray
        "ns3:Speed": NumberArray
    }>
}

export interface ITrackPoint {
    Time: StringArray
    Position?: Array<IPosition>
    AltitudeMeters: StringArray
    DistanceMeters: StringArray
    Extensions: Array<IExtensions>
    HeartRateBpm?:Array<IValue>
}

export interface ILap {
    $: { StartTime: string }
    TotalTimeSeconds: StringArray
    DistanceMeters: StringArray
    Calories?: StringArray
    AverageHeartRateBpm?: Array<IValue>
    MaximumHeartRateBpm?:Array<IValue>
    Intensity?: StringArray
    TriggerMethod?: StringArray
    Track?: Array<{
        Trackpoint: Array<ITrackPoint>
    }>
}

export interface IActivity {
    $: { Sport: string }
    Id: StringArray
    Lap: Array<ILap>
}

export interface  ISummary{
    sport: string,
    timeInSeconds?: number,
    distanceMeters?: number,
    calories?: number,
    date: string,
    startPosition: {
        lat: number | null,
        lng: number | null
    }
}

