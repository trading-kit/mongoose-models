import mongoose, { Document, Schema } from "mongoose";

export interface IBinanceRawMarginTrade extends Document {
  id: number;
  symbol: string;
}

const BinanceRawMarginTradeSchema: Schema<IBinanceRawMarginTrade> = new Schema(
  {
    id: { type: Number, required: true },
    symbol: { type: String, required: true },
  },
  { strict: false }
);

// Unique index on id and symbol
BinanceRawMarginTradeSchema.index({ id: -1, symbol: 1 }, { unique: true });
BinanceRawMarginTradeSchema.index({ symbol: 1 });

export const BinanceRawMarginTrade =
  mongoose.models.BinanceRawMarginTrade ||
  mongoose.model<IBinanceRawMarginTrade>("BinanceRawMarginTrade", BinanceRawMarginTradeSchema, "binanceRawMarginTrades");
