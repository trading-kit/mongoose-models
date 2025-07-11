import mongoose, { Document } from "mongoose";
export interface IBinanceRawTrade extends Document {
    id: number;
    symbol: string;
}
export declare const BinanceRawTrade: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IBinanceRawTrade, {}, {}, {}, mongoose.Document<unknown, {}, IBinanceRawTrade, {}> & IBinanceRawTrade & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=BinanceRawTrade.d.ts.map