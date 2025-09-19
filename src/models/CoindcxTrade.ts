import mongoose, { Document, Schema } from "mongoose";

export interface ICoindcxTrade extends Document {
  id: number;
  side: string;
  fee_amount: number;
  ecode: string;
  quantity: number;
  price: number;
  symbol: string;
  timestamp: number;
  fee_rate: number;
  order_id: string;
  processed?: boolean;
}

const CoindcxTradeSchema: Schema<ICoindcxTrade> = new Schema<ICoindcxTrade>(
  {
    id: { type: Number, required: true },
    side: { type: String },
    fee_amount: { type: Number },
    ecode: { type: String },
    quantity: { type: Number },
    price: { type: Number },
    symbol: { type: String },
    timestamp: { type: Number },
    fee_rate: { type: Number },
    order_id: { type: String },
    processed: { type: Boolean, default: false },
  },
  { strict: false }
);

// Compound index for faster queries
CoindcxTradeSchema.index({ user: -1, id: -1, order_id: -1 }, { unique: true });
CoindcxTradeSchema.index({ user: -1, timestamp: -1 });
CoindcxTradeSchema.index({ timestamp: -1, quoteAsset: -1 });
CoindcxTradeSchema.index({ user: 1, symbol: 1, timestamp: 1, processed: 1 });

export const CoindcxTrade = mongoose.models.CoindcxTrade || mongoose.model<ICoindcxTrade>("CoindcxTrade", CoindcxTradeSchema, "coindcxTrades");
