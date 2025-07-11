import mongoose, { Document } from "mongoose";
export interface IOrder extends Document {
    source: string;
}
export declare const Order: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IOrder, {}, {}, {}, mongoose.Document<unknown, {}, IOrder, {}> & IOrder & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Order.d.ts.map