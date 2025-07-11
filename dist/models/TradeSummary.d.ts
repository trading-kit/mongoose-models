import mongoose, { Document } from "mongoose";
export interface ITradeSummary extends Document {
    user: string;
    date: string;
    side: string;
    quoteAsset: string;
    fee: number;
    quoteVolume: number;
}
export declare const TradeSummary: mongoose.Model<any, {}, {}, {}, any, any>;
