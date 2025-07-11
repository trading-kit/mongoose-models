import mongoose, { Document } from "mongoose";
export interface ISnooze extends Document {
    key: string;
    expiry_time: Date;
}
export declare const Snooze: mongoose.Model<any, {}, {}, {}, any, any>;
