import mongoose, { Document } from "mongoose";
export interface ICoindcxTds extends Document {
    key: string;
}
export declare const CoindcxTds: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<ICoindcxTds, {}, {}, {}, mongoose.Document<unknown, {}, ICoindcxTds, {}> & ICoindcxTds & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=CoindcxTds.d.ts.map