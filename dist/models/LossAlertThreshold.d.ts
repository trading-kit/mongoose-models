import mongoose, { Document } from "mongoose";
export interface ILossAlertThreshold extends Document {
    exchange: string;
    symbol: string;
    user: string;
    threshold: number;
}
export declare const LossAlertThreshold: mongoose.Model<any, {}, {}, {}, any, any>;
