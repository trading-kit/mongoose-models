import mongoose, { Document } from "mongoose";
export interface ITradeSummary extends Document {
    user: string;
    date: string;
    side: string;
    quoteAsset: string;
    fee: number;
    quoteVolume: number;
}
export declare const TradeSummary: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<ITradeSummary, {}, {}, {}, mongoose.Document<unknown, {}, ITradeSummary, {}> & ITradeSummary & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=TradeSummary.d.ts.map