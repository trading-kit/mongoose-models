import mongoose, { Document } from "mongoose";
export interface IBinanceRawConvert extends Document {
    orderId: number;
}
export declare const BinanceRawConvert: mongoose.Model<any, {}, {}, {}, any, any>;
