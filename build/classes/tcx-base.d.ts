declare class TcxBase<T> {
    protected readonly _obj: T;
    constructor(obj: T);
    valueOf(): T;
}
export default TcxBase;
