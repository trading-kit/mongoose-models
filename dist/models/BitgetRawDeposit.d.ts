import mongoose, { Document } from "mongoose";
export interface IBitgetRawDeposit extends Document {
    orderId: string;
    coin?: string;
    spotTaxType?: string;
    amount?: number;
    fee?: number;
    balance?: number;
    ts?: number;
}
export declare const BitgetRawDeposit: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IBitgetRawDeposit, {}, {}, {}, mongoose.Document<unknown, {}, IBitgetRawDeposit, {}> & IBitgetRawDeposit & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=BitgetRawDeposit.d.ts.map