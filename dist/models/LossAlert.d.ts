import mongoose, { Document } from "mongoose";
export interface ILossAlert extends Document {
    user: string;
    timestamp: number;
    exchange: string;
    type: string;
}
export declare const LossAlert: mongoose.Model<any, {}, {}, {}, any, any>;
