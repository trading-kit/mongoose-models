import mongoose, { Document } from "mongoose";
export interface IMyTrade extends Document {
    [key: string]: any;
}
export declare const MyTrade: mongoose.Model<any, {}, {}, {}, any, any>;
