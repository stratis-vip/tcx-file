import TcxBase from "./tcx-base";
import { IExtensions } from "./consts";
declare class Extensions extends TcxBase<IExtensions> {
    constructor(obj: IExtensions);
    get speed(): number | undefined;
    get runCadence(): number | undefined;
}
export default Extensions;
//# sourceMappingURL=extensions.d.ts.map