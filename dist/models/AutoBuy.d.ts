import mongoose, { Document } from "mongoose";
export interface IAutoBuy extends Document {
    completed: boolean;
    coin?: string;
    timestamp?: Date;
}
export declare const AutoBuy: mongoose.Model<any, {}, {}, {}, any, any>;
