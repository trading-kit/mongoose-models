import mongoose, { Document } from "mongoose";
export interface IBitgetRawSpotTransaction extends Document {
    id: string;
    coin: string;
    spotTaxType: string;
    amount: number;
    fee: number;
    balance: number;
    ts: number;
}
export declare const BitgetRawSpotTransaction: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IBitgetRawSpotTransaction, {}, {}, {}, mongoose.Document<unknown, {}, IBitgetRawSpotTransaction, {}> & IBitgetRawSpotTransaction & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=BitgetRawSpotTransaction.d.ts.map