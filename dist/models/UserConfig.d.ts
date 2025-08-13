import mongoose, { Document } from "mongoose";
export interface IUserConfig extends Document {
    user: string;
    exchange: string;
    inr_maintained: number;
    usdt_maintained: number;
    buy_order_size: number;
    profit_percentage?: number;
    role: string;
    createdAt?: Date;
    updatedAt?: Date;
    blacklisted_coins?: string[];
}
export declare const UserConfig: mongoose.Model<any, {}, {}, {}, any, any>;
//# sourceMappingURL=UserConfig.d.ts.map