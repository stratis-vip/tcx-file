class TcxBase<T> {
    protected readonly _obj: T

    constructor(obj: T) {
        if (!obj) throw new Error('Object Required')
        this._obj = obj
    }

    valueOf() {
        return this._obj
    }
}

export default TcxBase
