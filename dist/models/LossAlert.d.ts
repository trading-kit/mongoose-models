import mongoose, { Document } from "mongoose";
export interface ILossAlert extends Document {
    user: string;
    timestamp: number;
    exchange: string;
    type: string;
}
export declare const LossAlert: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<ILossAlert, {}, {}, {}, mongoose.Document<unknown, {}, ILossAlert, {}> & ILossAlert & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=LossAlert.d.ts.map