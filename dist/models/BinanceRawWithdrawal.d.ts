import mongoose, { Document } from "mongoose";
export interface IBinanceRawWithdrawal extends Document {
    id: string;
}
export declare const BinanceRawWithdrawal: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IBinanceRawWithdrawal, {}, {}, {}, mongoose.Document<unknown, {}, IBinanceRawWithdrawal, {}> & IBinanceRawWithdrawal & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=BinanceRawWithdrawal.d.ts.map