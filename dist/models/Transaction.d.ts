import mongoose, { Document } from "mongoose";
export interface ITransaction extends Document {
    [key: string]: any;
}
export declare const Transaction: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<ITransaction, {}, {}, {}, mongoose.Document<unknown, {}, ITransaction, {}> & ITransaction & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Transaction.d.ts.map