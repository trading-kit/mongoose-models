import mongoose, { Document } from "mongoose";
export interface IUnocoinRawTrade extends Document {
    id: number;
    coin: string;
}
export declare const UnocoinRawTrade: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IUnocoinRawTrade, {}, {}, {}, mongoose.Document<unknown, {}, IUnocoinRawTrade, {}> & IUnocoinRawTrade & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=UnocoinRawTrade.d.ts.map