import mongoose, { Document } from "mongoose";
export interface IMarketMakingConfig extends Document {
    symbol: string;
    baseSpreadPercent: number;
    orderQty: number;
    maxBalance: number;
    user: string;
    exchange: string;
    bidSpreadPercent?: number;
    askSpreadPercent?: number;
}
export declare const MarketMakingConfig: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IMarketMakingConfig, {}, {}, {}, mongoose.Document<unknown, {}, IMarketMakingConfig, {}> & IMarketMakingConfig & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=MarketMakingConfig.d.ts.map