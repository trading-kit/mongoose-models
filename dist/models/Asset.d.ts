import mongoose, { Document } from "mongoose";
export interface IAsset extends Document {
    depositTo: string;
    asset: string;
    withdrawalFrom: string;
}
export declare const Asset: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IAsset, {}, {}, {}, mongoose.Document<unknown, {}, IAsset, {}> & IAsset & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Asset.d.ts.map