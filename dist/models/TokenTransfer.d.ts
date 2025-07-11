import mongoose, { Document } from "mongoose";
export interface ITokenTransfer extends Document {
    user: string;
    timeStamp: Date;
}
export declare const TokenTransfer: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<ITokenTransfer, {}, {}, {}, mongoose.Document<unknown, {}, ITokenTransfer, {}> & ITokenTransfer & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=TokenTransfer.d.ts.map