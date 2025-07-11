import mongoose, { Document } from "mongoose";
export interface IMarketMakingConfig extends Document {
    symbol: string;
    baseSpreadPercent: number;
    orderQty: number;
    maxBalance: number;
    user: string;
    exchange: string;
}
export declare const MarketMakingConfig: mongoose.Model<any, {}, {}, {}, any, any>;
