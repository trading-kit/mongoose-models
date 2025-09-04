import mongoose, { Document } from "mongoose";
export interface INormalizedTrade extends Document {
    exchange: string;
    user: string;
    date: Date;
    id: number;
    order_id: string;
    timestamp: number;
    market: string;
    side: "buy" | "sell";
    tds: number;
    tds_asset: string;
    fee: number;
    fee_asset: string;
    price: number;
    qty: number;
    net_qty: number;
    quote_qty: number;
    net_quote_qty: number;
    gst: number;
    ecode: string;
    processed: boolean;
    base_asset: string;
    quote_asset: string;
}
export declare const NormalizedTrade: mongoose.Model<any, {}, {}, {}, any, any>;
//# sourceMappingURL=NormalizedTrade.d.ts.map