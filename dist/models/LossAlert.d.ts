import mongoose, { Document } from "mongoose";
export interface ILossAlert extends Document {
    [key: string]: any;
}
export declare const LossAlert: mongoose.Model<any, {}, {}, {}, any, any>;
