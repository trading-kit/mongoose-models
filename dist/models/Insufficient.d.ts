import mongoose, { Document } from "mongoose";
export interface IInsufficient extends Document {
    profit_per?: number;
}
export declare const Insufficient: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IInsufficient, {}, {}, {}, mongoose.Document<unknown, {}, IInsufficient, {}> & IInsufficient & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Insufficient.d.ts.map