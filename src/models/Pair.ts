import mongoose, { Document, Schema } from "mongoose";

export interface IPair extends Document {
  min_profit_per?: number;
  buy_profit_per?: number;
  instant_sell_per?: number;
  instant_buy_per?: number;
  symbol: string;
  exchange: string;
  buy_user?: string;
}

const PairSchema: Schema<IPair> = new Schema<IPair>(
  {
    min_profit_per: { type: Number },
    buy_profit_per: { type: Number },
    instant_sell_per: { type: Number },
    instant_buy_per: { type: Number },
    symbol: { type: String, required: true },
    exchange: { type: String, required: true },
    buy_user: { type: String },
  },
  { strict: false }
);

// Indexes
PairSchema.index({ exchange: 1, isBuyActive: 1, isBuy: 1 });
PairSchema.index({ exchange: 1, active: 1, isBot: 1 });

PairSchema.index({ exchange: 1, symbol: 1 }, { unique: true });
export const Pair =
  mongoose.models.Pair || mongoose.model<IPair>("Pair", PairSchema);
