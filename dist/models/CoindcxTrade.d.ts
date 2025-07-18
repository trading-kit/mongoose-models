import mongoose, { Document } from "mongoose";
export interface ICoindcxTrade extends Document {
    id: number;
    side: string;
    fee_amount: number;
    ecode: string;
    quantity: number;
    price: number;
    symbol: string;
    timestamp: number;
    fee_rate: number;
    order_id: string;
    processed?: boolean;
}
export declare const CoindcxTrade: mongoose.Model<any, {}, {}, {}, any, any>;
//# sourceMappingURL=CoindcxTrade.d.ts.map