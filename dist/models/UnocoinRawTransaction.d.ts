import mongoose, { Document } from "mongoose";
export interface IUnocoinRawTransaction extends Document {
    coin: string;
    uuid: string;
    timestamp?: number;
}
export declare const UnocoinRawTransaction: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IUnocoinRawTransaction, {}, {}, {}, mongoose.Document<unknown, {}, IUnocoinRawTransaction, {}> & IUnocoinRawTransaction & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=UnocoinRawTransaction.d.ts.map