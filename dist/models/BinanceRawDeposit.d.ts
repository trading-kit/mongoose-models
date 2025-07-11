import mongoose, { Document } from "mongoose";
export interface IBinanceRawDeposit extends Document {
    id: number;
}
export declare const BinanceRawDeposit: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IBinanceRawDeposit, {}, {}, {}, mongoose.Document<unknown, {}, IBinanceRawDeposit, {}> & IBinanceRawDeposit & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=BinanceRawDeposit.d.ts.map