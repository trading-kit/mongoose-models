import mongoose, { Document } from "mongoose";
export interface IWazirxRawTrade extends Document {
    id: number;
    symbol: string;
}
export declare const WazirxRawTrade: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IWazirxRawTrade, {}, {}, {}, mongoose.Document<unknown, {}, IWazirxRawTrade, {}> & IWazirxRawTrade & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=WazirxRawTrade.d.ts.map