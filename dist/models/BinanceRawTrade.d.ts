import mongoose, { Document } from "mongoose";
export interface IBinanceRawTrade extends Document {
    id: number;
    symbol: string;
}
export declare const BinanceRawTrade: mongoose.Model<any, {}, {}, {}, any, any>;
//# sourceMappingURL=BinanceRawTrade.d.ts.map