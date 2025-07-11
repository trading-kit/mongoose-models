import mongoose, { Document } from "mongoose";
export interface IPair extends Document {
    min_profit_per?: number;
    buy_profit_per?: number;
    instant_sell_per?: number;
    instant_buy_per?: number;
    symbol: string;
    server_name: string;
    buy_user?: string;
}
export declare const Pair: mongoose.Model<any, {}, {}, {}, any, any>;
