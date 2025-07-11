import mongoose, { Document } from "mongoose";
export interface IBinanceRawMarginTrade extends Document {
    id: number;
    symbol: string;
}
export declare const BinanceRawMarginTrade: mongoose.Model<any, {}, {}, {}, any, any>;
