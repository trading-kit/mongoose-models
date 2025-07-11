import mongoose, { Document } from "mongoose";
export interface IUnocoinRawTransaction extends Document {
    coin: string;
    uuid: string;
    timestamp?: number;
}
export declare const UnocoinRawTransaction: mongoose.Model<any, {}, {}, {}, any, any>;
//# sourceMappingURL=UnocoinRawTransaction.d.ts.map