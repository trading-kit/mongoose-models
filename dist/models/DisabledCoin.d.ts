import mongoose, { Document } from "mongoose";
export interface IDisabledCoin extends Document {
    coin: string;
    disabled: boolean;
    exchange: string;
}
export declare const DisabledCoin: mongoose.Model<any, {}, {}, {}, any, any>;
