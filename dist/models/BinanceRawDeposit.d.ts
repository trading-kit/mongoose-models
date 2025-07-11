import mongoose, { Document } from "mongoose";
export interface IBinanceRawDeposit extends Document {
    id: number;
}
export declare const BinanceRawDeposit: mongoose.Model<any, {}, {}, {}, any, any>;
