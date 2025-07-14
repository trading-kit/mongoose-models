import mongoose, { Document } from "mongoose";
export interface IMarketMakingConfig extends Document {
    symbol: string;
    baseSpreadPercent: number;
    orderQty: number;
    maxBalance: number;
    active: boolean;
    user: string;
    exchange: string;
    bidSpreadPercent?: number;
    askSpreadPercent?: number;
}
export declare const MarketMakingConfig: mongoose.Model<any, {}, {}, {}, any, any>;
//# sourceMappingURL=MarketMakingConfig.d.ts.map