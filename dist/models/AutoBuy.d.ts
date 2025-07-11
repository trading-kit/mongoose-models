import mongoose, { Document } from "mongoose";
export interface IAutoBuy extends Document {
    completed: boolean;
    coin?: string;
    timestamp?: Date;
}
export declare const AutoBuy: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IAutoBuy, {}, {}, {}, mongoose.Document<unknown, {}, IAutoBuy, {}> & IAutoBuy & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=AutoBuy.d.ts.map