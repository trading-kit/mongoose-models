import mongoose, { Schema } from "mongoose";

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
  gain: number; // Gain after TDS deduction
  buy_rate?: number;
  sell_rate?: number;
  buy_symbol?: string;
  sell_symbol?: string;
}

const RealizedPnlSchema = new Schema(
  {
    qty: Number,
    total: Number,
    pl: Number,
    pl_per: Number,
    currency: String,
    base: String,
    id: String,
    order_id: String,
    timestamp: Number,
    user: String,
    rate: Number,
    exchange: String,
    baseAsset: String,
    quoteAsset: String,
    gain: Number,
    tds: Number,
    buy_rate: Number,
    sell_rate: Number,
    buy_symbol: String,
    sell_symbol: String,
  },
  {
    strict: false,
  }
);

//index on exchange user and timestamp
RealizedPnlSchema.index({ exchange: 1, user: 1, timestamp: -1 });

export const RealizedPnl = mongoose.models.RealizedPnl || mongoose.model<IRealizedPnl & Document>("RealizedPnl", RealizedPnlSchema, "realized_pnls");
