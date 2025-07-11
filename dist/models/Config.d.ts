import mongoose, { Document } from "mongoose";
export interface IConfig extends Document {
    app: string;
    mmLossAlertTime?: number;
}
export declare const Config: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IConfig, {}, {}, {}, mongoose.Document<unknown, {}, IConfig, {}> & IConfig & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Config.d.ts.map