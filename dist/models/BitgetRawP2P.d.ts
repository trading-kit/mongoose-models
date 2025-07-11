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
export declare const BitgetRawP2P: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IBitgetRawP2P, {}, {}, {}, mongoose.Document<unknown, {}, IBitgetRawP2P, {}> & IBitgetRawP2P & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=BitgetRawP2P.d.ts.map