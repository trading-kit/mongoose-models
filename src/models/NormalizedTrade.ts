import mongoose, { Document, Schema } from "mongoose";

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
  symbol: string;
}

const NormalizedTradeSchema = new Schema<INormalizedTrade>(
  {
    exchange: { type: String, required: true },
    user: { type: String, required: true },
    date: { type: Date, required: true },
    id: { type: Number, required: true },
    order_id: { type: String, required: true },
    timestamp: { type: Number, required: true },
    market: { type: String, required: true },
    side: { type: String, enum: ["buy", "sell"], required: true },
    tds: { type: Number, required: true },
    tds_asset: { type: String, required: true },
    fee: { type: Number, required: true },
    fee_asset: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true },
    net_qty: { type: Number, required: true },
    quote_qty: { type: Number, required: true },
    net_quote_qty: { type: Number, required: true },
    gst: { type: Number, required: true },
    ecode: { type: String, required: true },
    processed: { type: Boolean, required: true },
    base_asset: { type: String, required: true },
    quote_asset: { type: String, required: true },
    symbol: { type: String, required: true },
  },
  {
    strict: true,
  }
);

// Compound unique index on id + order_id
NormalizedTradeSchema.index({ exchange: 1, user: 1, id: 1, order_id: 1 }, { unique: true });

export const NormalizedTrade = mongoose.models.NormalizedTrade || mongoose.model<INormalizedTrade>("NormalizedTrade", NormalizedTradeSchema);
