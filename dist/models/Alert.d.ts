import mongoose, { Document } from "mongoose";
export interface IAlert extends Document {
    [key: string]: any;
}
export declare const Alert: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IAlert, {}, {}, {}, mongoose.Document<unknown, {}, IAlert, {}> & IAlert & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Alert.d.ts.map