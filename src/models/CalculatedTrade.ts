import mongoose, { Document, Schema } from "mongoose";

export interface ICalculatedTrade extends Document {
  exchange: string; // Optional field to store exchange name
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
  usdt_price?: number;
  price_inr: number;
  fee_inr: number;
  total_inr: number;
  tds_inr: number;
}

const CalculatedTradeSchema = new Schema<ICalculatedTrade>(
  {
    exchange: { type: String, required: true }, // Default to "coindcx
    user: { type: String, required: true },
    id: { type: Number, required: true },
    side: { type: String, enum: ["buy", "sell"], required: true },
    fee_amount: { type: Number, required: true },
    ecode: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    symbol: { type: String, required: true },
    timestamp: { type: Number, required: true },
    order_id: { type: String, required: true },
    processed: { type: Boolean, required: true },
    pl: { type: Number },
    pl_percent: { type: Number },
    avg_cost_before: { type: Number },
    rem_qty: { type: Number },
    avg_cost_after: { type: Number },
    cum_np: { type: Number },
    cum_tds: { type: Number },
    cum_gain: { type: Number },
    cum_fees: { type: Number },
    tds: { type: Number },
    gain: { type: Number },
    date: { type: String },
    base_asset: { type: String },
    quote_asset: { type: String },
    usdt_price: { type: Number },
    price_inr: { type: Number },
    fee_inr: { type: Number },
    total_inr: { type: Number },
    tds_inr: { type: Number },
  },
  {
    strict: true,
  }
);

// Compound unique index on id + order_id
CalculatedTradeSchema.index({ exchange: 1, user: 1, id: 1, order_id: 1 }, { unique: true });

export const CalculatedTrade = mongoose.models.CalculatedTrade || mongoose.model<ICalculatedTrade>("CalculatedTrade", CalculatedTradeSchema);
