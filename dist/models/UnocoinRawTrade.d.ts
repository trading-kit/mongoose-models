import mongoose, { Document } from "mongoose";
export interface IUnocoinRawTrade extends Document {
    id: number;
    coin: string;
}
export declare const UnocoinRawTrade: mongoose.Model<any, {}, {}, {}, any, any>;
