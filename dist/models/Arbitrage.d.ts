import mongoose, { Document } from "mongoose";
export interface IArbitrage extends Document {
    profit_per?: number;
}
export declare const Arbitrage: mongoose.Model<any, {}, {}, {}, any, any>;
