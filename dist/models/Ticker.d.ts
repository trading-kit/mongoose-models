import mongoose, { Document } from "mongoose";
export interface ITicker extends Document {
    pair?: string;
    exchange?: string;
    baseAsset?: string;
    quoteAsset?: string;
    timestamp?: number;
}
export declare const Ticker: mongoose.Model<any, {}, {}, {}, any, any>;
