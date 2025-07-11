import mongoose, { Document } from "mongoose";
export interface ILossAlertThreshold extends Document {
    exchange: string;
    symbol: string;
    user: string;
    threshold: number;
}
export declare const LossAlertThreshold: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<ILossAlertThreshold, {}, {}, {}, mongoose.Document<unknown, {}, ILossAlertThreshold, {}> & ILossAlertThreshold & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=LossAlertThreshold.d.ts.map