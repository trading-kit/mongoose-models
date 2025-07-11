import mongoose, { Document } from "mongoose";
export interface IInsufficient extends Document {
    profit_per?: number;
}
export declare const Insufficient: mongoose.Model<any, {}, {}, {}, any, any>;
