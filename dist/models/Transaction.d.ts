import mongoose, { Document } from "mongoose";
export interface ITransaction extends Document {
    [key: string]: any;
}
export declare const Transaction: mongoose.Model<any, {}, {}, {}, any, any>;
