import mongoose, { Schema } from "mongoose";

export interface IRealizedPnl {
  qty?: number;
  total: number;
  profit: number;
  profit_per?: number;
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
}

const RealizedPnlSchema = new Schema(
  {
    qty: Number,
    total: Number,
    profit: Number,
    profit_per: Number,
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
  },
  {
    strict: false,
  }
);

//index on exchange user and timestamp
RealizedPnlSchema.index({ exchange: 1, user: 1, timestamp: -1 });

export const RealizedPnl =
  mongoose.models.coindcxRealizedPnls || mongoose.model<IRealizedPnl & Document>("coindcxRealizedPnls", RealizedPnlSchema, "coindcxRealizedPnls");
