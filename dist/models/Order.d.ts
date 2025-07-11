import mongoose, { Document } from "mongoose";
export interface IOrder extends Document {
    source: string;
}
export declare const Order: mongoose.Model<any, {}, {}, {}, any, any>;
//# sourceMappingURL=Order.d.ts.map