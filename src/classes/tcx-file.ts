import fs from 'fs'
import Activity from "./activity"
import Lap from './lap'

const Pace = require("./pace");
import {parseString} from 'xml2js'
import {ITcxFileContent} from "./consts";

class TcxFile {
    private _data?: ITcxFileContent
    private _isValid = false
    private _file?: string
    private _activities: Array<Activity> = []
    private _laps: Array<Lap> = []

    constructor(file?: string) {
        if (!file) {
            throw new Error('No file!')
        }
        if (!fs.existsSync(file)) {
            throw new Error(`File "${file}" not Exists`)
        }

        try {
            const a = fs.readFileSync(file, 'utf8')

            parseString(a, (err: Error, result: ITcxFileContent | undefined) => {
                if (err) {
                    throw new Error(err.message)
                }
                if (!result?.TrainingCenterDatabase) {
                    throw new Error(`"${this._file}" is not a valid tcx/gpx file!`)
                }
                this._data = result
                const acts = result.TrainingCenterDatabase.Activities[0].Activity
                for (const act of acts) {
                    this._activities.push(new Activity(act))
                }
                this._laps = []
                for (const activity of this._activities) {
                    for (const lap of activity.laps) {
                        this._laps.push(lap)
                    }
                }
                this._isValid = true
            })
        } catch (e: unknown) {
            throw  new Error((e as Error).message)
        }
    }

    get data() {
        if (!this._isValid) {
            throw new Error(`"${this._file}" is not a valid tcx/gpx file!`)
        }
        return this._data
    }

    get activities() {
        if (!this._isValid) {
            throw new Error(`"${this._file}" is not a valid tcx/gpx file!`)
        }
        return this._activities
    }

    get count() {
        return this._activities.length
    }

    get id() {
        return this._activities[0].id
    }

    get sport() {
        return this._activities[0].sport
    }

    get path() {
        const activity = this._activities[0]
        const laps = []
        for (const lap of activity.laps) {
            laps.push(...lap.tracks)
        }
        return laps.filter(t => t.position).map(tr => tr.position?.valueOf())
    }

    get pathForGoogleMaps() {

        const originalPath = this.path

        return originalPath.map(t => {
            return {lat: t?.LatitudeDegrees, lng: t?.LongitudeDegrees}
        })
    }

    get laps() {
        return this._laps
    }

    get timeInSeconds() {
        return this._laps.map((l: Lap) => l.totalTimeSeconds).reduce((a, b) => Number(a) + Number(b), 0)
    }

    get distanceMeters() {
        return this._laps.map((l: Lap) => l.distanceMeters).reduce((a, b) => Number(a) + Number(b), 0)
    }

    get pace() {
        return new Pace(Number(this.timeInSeconds) * 1000 / Number(this.distanceMeters))
    }

    get calories() {
        return this._laps.map((l: Lap) => l.calories).reduce((a, b) => Number(a) + Number(b), 0)
    }

    get summary() {
        return {
            sport: this.sport,
            timeInSeconds: this.timeInSeconds,
            distanceMeters: this.distanceMeters,
            calories: this.calories,
            date: this._laps[0].startTime,
            startPosition: {
                lat: this._laps[0].tracks[0].position?.latitudeDegrees || null,
                lng: this._laps[0].tracks[0].position?.longitudeDegrees || null
            }
        }
    }
}

export default TcxFile
