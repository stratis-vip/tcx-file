import TcxFile from './classes/tcx-file'
const path = require("path");
const Activity = require("./classes/activity");
const {Duration} = require('luxon')
const {SportType} = require("./classes/consts");

const file = path.join(__dirname, '../src/tests/2021-09-10T06_58_34+03_00_Running.tcx')
const file1 = path.join(__dirname, '../src/tests/2021-09-08T06_50_45+03_00_Running.tcx')
// var parseString = require('xml2js').parseString;
const t = new TcxFile(file)
const t1 = new TcxFile(file1)

// const firstLap = t.activities[0].laps[0]
// // console.log( t.id, t.sport, firstLap.startTime, firstLap.totalTimeSeconds, firstLap.distanceMeters, firstLap.calories,
// //     firstLap.averageHeartRateBpm, firstLap.maximumHeartRateBpm, firstLap.tracks[160].extensions.speed)
// // console.log('[')
// // for (const r of t.pathForGoogelMaps){
// //     console.log(r,',')
// // }
// // console.log(']'
//
//
// t.laps.map(l => console.log(Number(l.pace), l.pace.toString()))
//
// console.log('total time:\t',t.laps.map(l=>l.totalTimeSeconds), t.laps.map(l => l.totalTimeSeconds).reduce((a,b) => a+b, 0))
// console.log('distance:\t',t.laps.map(l => l.distanceMeters),t.laps.map(l => l.distanceMeters).reduce((a,b) => a+b, 0))
// console.log('calories:\t',t.laps.map(l => l.calories).reduce((a,b) => a+b, 0))
// console.log('Maximum BPM:\t', Math.max(...t.laps.map(l => l.maximumHeartRateBpm)))
// console.log('Average BPM:\t', Math.floor((t.laps.map(l => l.averageHeartRateBpm).reduce((a,b) => a+b,0)) / t.laps.length))
// console.log('total Laps:\t', t.laps.length)
//
// console.log('start time:\t', t.laps[0].startTime)
console.log('summary', JSON.stringify(t.summary, null, 2))
console.log('summary', JSON.stringify(t1.summary, null, 2))

