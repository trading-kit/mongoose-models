import mongoose, { Document } from "mongoose";
export interface IBitgetRawP2P extends Document {
    id: string;
    coin: string;
    spotTaxType: string;
    amount: number;
    fee: number;
    balance: number;
    ts: number;
}
export declare const BitgetRawP2P: mongoose.Model<any, {}, {}, {}, any, any>;
