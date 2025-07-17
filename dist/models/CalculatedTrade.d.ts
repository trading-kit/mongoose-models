import mongoose, { Document } from "mongoose";
export interface ICalculatedTrade extends Document {
    exchange: string;
    user: string;
    id: number;
    side: "buy" | "sell";
    fee_amount: number;
    ecode: string;
    quantity: number;
    price: number;
    symbol: string;
    timestamp: number;
    order_id: string;
    processed: boolean;
    pl: number;
    pl_percent: number;
    avg_cost_before: number;
    rem_qty: number;
    avg_cost_after: number;
    cum_np: number;
    cum_tds: number;
    cum_gain: number;
    cum_fees: number;
    tds: number;
    gain: number;
    date: string;
    base_asset: string;
    quote_asset: string;
    usdt_price_at_trade?: number;
    price_inr: number;
    fee_inr: number;
    total_inr: number;
    tds_inr: number;
}
export declare const CalculatedTrade: mongoose.Model<any, {}, {}, {}, any, any>;
//# sourceMappingURL=CalculatedTrade.d.ts.map