import mongoose, { Document } from "mongoose";
export interface IMyTrade extends Document {
    [key: string]: any;
}
export declare const MyTrade: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IMyTrade, {}, {}, {}, mongoose.Document<unknown, {}, IMyTrade, {}> & IMyTrade & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=MyTrade.d.ts.map