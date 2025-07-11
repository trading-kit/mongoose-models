import mongoose, { Document } from "mongoose";
export interface IBinanceRawWithdrawal extends Document {
    id: string;
}
export declare const BinanceRawWithdrawal: mongoose.Model<any, {}, {}, {}, any, any>;
