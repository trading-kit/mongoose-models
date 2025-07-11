import mongoose, { Document } from "mongoose";
export interface IConfig extends Document {
    app: string;
    mmLossAlertTime?: number;
}
export declare const Config: mongoose.Model<any, {}, {}, {}, any, any>;
