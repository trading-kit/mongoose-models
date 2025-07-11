import mongoose, { Document } from "mongoose";
export interface IWazirxRawTrade extends Document {
    id: number;
    symbol: string;
}
export declare const WazirxRawTrade: mongoose.Model<any, {}, {}, {}, any, any>;
//# sourceMappingURL=WazirxRawTrade.d.ts.map