import mongoose, { Document } from "mongoose";
export interface ITokenTransfer extends Document {
    user: string;
    timeStamp: Date;
}
export declare const TokenTransfer: mongoose.Model<any, {}, {}, {}, any, any>;
//# sourceMappingURL=TokenTransfer.d.ts.map