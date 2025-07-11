import mongoose, { Document } from "mongoose";
export interface ICoindcxTrade extends Document {
    id: number;
    side?: string;
    fee_amount?: string;
    ecode?: string;
    quantity?: string;
    price?: string;
    symbol?: string;
    timestamp?: number;
    fee_rate?: number;
    order_id?: string;
    processed?: boolean;
}
export declare const CoindcxTrade: mongoose.Model<any, {}, {}, {}, any, any>;
