import mongoose, { Document } from "mongoose";
export interface ISnooze extends Document {
    key: string;
    expiry_time: Date;
}
export declare const Snooze: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<ISnooze, {}, {}, {}, mongoose.Document<unknown, {}, ISnooze, {}> & ISnooze & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Snooze.d.ts.map