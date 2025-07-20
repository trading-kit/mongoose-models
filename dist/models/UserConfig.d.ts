import mongoose, { Document } from "mongoose";
export interface IUserConfig extends Document {
    user: string;
    exchange: string;
    inr: number;
    usdt: number;
    buy_order_size: number;
    profit_percentage: number;
    not_allocated: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const UserConfig: mongoose.Model<any, {}, {}, {}, any, any>;
//# sourceMappingURL=UserConfig.d.ts.map