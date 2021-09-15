const {Duration} = require('luxon')

class Pace {
    private readonly _secs

    constructor(secs: number) {
        this._secs = secs || 0
    }

    toString() {
        return Duration.fromMillis(this._secs * 1000).toFormat('hh:mm:ss.S')
    }

    valueOf() {
        return this._secs
    }
}

export default Pace
