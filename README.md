#tcx-file

---
A library to get info from a tcx file.

###Constructor
```javascript 
constructor(file?: string) 
```
where the file is the full path of tcx file

Properties 
####activities:Activity[] 
the activities in the file
####count:number
the number of activities
####id:string
the unique name of the file. Usually the datetime of the start!
####sport:string
the type of activity
####path: IPosition[] | undefined
Array with all the points of the path
####pathForGoogleMaps:
Array with all the points in format that google maps API understands
#####laps:Lap[]
Array with all Lap objects
####timeInSeconds:number|undefined
The duration of activity
####pace:Pace
A pace object to the activity's pace
####calories:number
the calories of activity
####summary:ISummary
the summary of the file
