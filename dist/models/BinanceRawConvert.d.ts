import mongoose, { Document } from "mongoose";
export interface IBinanceRawConvert extends Document {
    orderId: number;
}
export declare const BinanceRawConvert: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IBinanceRawConvert, {}, {}, {}, mongoose.Document<unknown, {}, IBinanceRawConvert, {}> & IBinanceRawConvert & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=BinanceRawConvert.d.ts.map