import mongoose, { Document } from "mongoose";
export interface IDisabledCoin extends Document {
    coin: string;
    disabled: boolean;
    exchange: string;
}
export declare const DisabledCoin: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IDisabledCoin, {}, {}, {}, mongoose.Document<unknown, {}, IDisabledCoin, {}> & IDisabledCoin & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=DisabledCoin.d.ts.map