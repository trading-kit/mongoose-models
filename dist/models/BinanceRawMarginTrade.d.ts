import mongoose, { Document } from "mongoose";
export interface IBinanceRawMarginTrade extends Document {
    id: number;
    symbol: string;
}
export declare const BinanceRawMarginTrade: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IBinanceRawMarginTrade, {}, {}, {}, mongoose.Document<unknown, {}, IBinanceRawMarginTrade, {}> & IBinanceRawMarginTrade & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=BinanceRawMarginTrade.d.ts.map