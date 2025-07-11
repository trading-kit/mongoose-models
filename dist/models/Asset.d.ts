import mongoose, { Document } from "mongoose";
export interface IAsset extends Document {
    depositTo: string;
    asset: string;
    withdrawalFrom: string;
}
export declare const Asset: mongoose.Model<any, {}, {}, {}, any, any>;
