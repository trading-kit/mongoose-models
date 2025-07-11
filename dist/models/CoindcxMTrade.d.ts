import mongoose, { Document } from "mongoose";
export interface ICoindcxMarketTrade extends Document {
    id: string;
    price?: number;
    qty?: number;
    quoteQty?: number;
    time: number;
    isBuyerMaker?: boolean;
    symbol: string;
}
export declare const CoindcxMarketTrade: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<ICoindcxMarketTrade, {}, {}, {}, mongoose.Document<unknown, {}, ICoindcxMarketTrade, {}> & ICoindcxMarketTrade & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=CoindcxMTrade.d.ts.map