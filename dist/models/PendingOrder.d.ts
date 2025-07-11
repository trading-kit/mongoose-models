import mongoose, { Document } from "mongoose";
export interface IPendingOrder extends Document {
    id: number;
}
export declare const PendingOrder: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IPendingOrder, {}, {}, {}, mongoose.Document<unknown, {}, IPendingOrder, {}> & IPendingOrder & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=PendingOrder.d.ts.map