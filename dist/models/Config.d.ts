import mongoose, { Document } from "mongoose";
export interface IConfig extends Document {
    app: string;
    mmLossAlertTime?: number;
    orders_active: boolean;
    exchange?: string;
}
export declare const Config: mongoose.Model<any, {}, {}, {}, any, any>;
//# sourceMappingURL=Config.d.ts.map