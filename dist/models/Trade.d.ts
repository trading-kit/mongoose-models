import mongoose, { Document } from "mongoose";
export interface ITrade extends Document {
    id: string;
    platform?: string;
    symbol?: string;
    time?: Date;
    perDiff?: number;
    profit?: number;
}
export declare const Trade: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<ITrade, {}, {}, {}, mongoose.Document<unknown, {}, ITrade, {}> & ITrade & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Trade.d.ts.map