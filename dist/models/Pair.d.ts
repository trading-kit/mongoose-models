import mongoose from "mongoose";
declare const Pair: mongoose.Model<{
    symbol: string;
    server_name: string;
    min_profit_per?: number | null | undefined;
    buy_profit_per?: number | null | undefined;
    instant_sell_per?: number | null | undefined;
    instant_buy_per?: number | null | undefined;
    buy_user?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    symbol: string;
    server_name: string;
    min_profit_per?: number | null | undefined;
    buy_profit_per?: number | null | undefined;
    instant_sell_per?: number | null | undefined;
    instant_buy_per?: number | null | undefined;
    buy_user?: string | null | undefined;
}, {}> & {
    symbol: string;
    server_name: string;
    min_profit_per?: number | null | undefined;
    buy_profit_per?: number | null | undefined;
    instant_sell_per?: number | null | undefined;
    instant_buy_per?: number | null | undefined;
    buy_user?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    strict: false;
}, {
    symbol: string;
    server_name: string;
    min_profit_per?: number | null | undefined;
    buy_profit_per?: number | null | undefined;
    instant_sell_per?: number | null | undefined;
    instant_buy_per?: number | null | undefined;
    buy_user?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    symbol: string;
    server_name: string;
    min_profit_per?: number | null | undefined;
    buy_profit_per?: number | null | undefined;
    instant_sell_per?: number | null | undefined;
    instant_buy_per?: number | null | undefined;
    buy_user?: string | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    symbol: string;
    server_name: string;
    min_profit_per?: number | null | undefined;
    buy_profit_per?: number | null | undefined;
    instant_sell_per?: number | null | undefined;
    instant_buy_per?: number | null | undefined;
    buy_user?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Pair;
