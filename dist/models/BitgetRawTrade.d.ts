import mongoose, { Document } from "mongoose";
export interface IBitgetRawTrade extends Document {
    userId: string;
    symbol: string;
    orderId: string;
    tradeId: string;
    orderType: string;
    side: string;
    priceAvg: number;
    size: number;
    amount: number;
    feeDetail: {
        deduction: number;
        totalFee: number;
    };
    tradeScope: string;
    cTime: number;
    uTime: number;
}
export declare const BitgetRawTrade: mongoose.Model<any, {}, {}, {}, any, any>;
