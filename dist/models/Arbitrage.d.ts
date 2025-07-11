import mongoose, { Document } from "mongoose";
export interface IArbitrage extends Document {
    profit_per?: number;
}
export declare const Arbitrage: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IArbitrage, {}, {}, {}, mongoose.Document<unknown, {}, IArbitrage, {}> & IArbitrage & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Arbitrage.d.ts.map