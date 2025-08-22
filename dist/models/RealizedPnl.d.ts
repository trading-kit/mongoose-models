import mongoose from "mongoose";
export interface IRealizedPnl {
    qty?: number;
    total: number;
    pl: number;
    pl_per?: number;
    currency?: string;
    base?: string;
    id?: string;
    order_id?: string;
    timestamp: Number;
    user: string;
    rate?: number;
    exchange: string;
    base_asset: string;
    quote_asset: string;
    tds: number;
    gain: number;
    buy_rate?: number;
    sell_rate?: number;
    buy_symbol?: string;
    sell_symbol?: string;
}
export declare const RealizedPnl: mongoose.Model<any, {}, {}, {}, any, any>;
//# sourceMappingURL=RealizedPnl.d.ts.map