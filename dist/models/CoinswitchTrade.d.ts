import mongoose, { Document } from "mongoose";
export interface ICoinswitchTrade extends Document {
    price: number;
    quantity: number;
    fee_amount: number;
    timestamp: number;
    id: string;
    executed_qty: number;
    user?: string;
}
export declare const CoinswitchTrade: mongoose.Model<any, {}, {}, {}, any, any>;
