import mongoose, { Document, Schema } from "mongoose";

export interface IBinanceRawTrade extends Document {
  id: number;
  symbol: string;
}

const BinanceRawTradeSchema: Schema<IBinanceRawTrade> = new Schema<IBinanceRawTrade>(
  {
    id: { type: Number, required: true },
    symbol: { type: String, required: true },
  },
  { strict: false }
);

// Unique index on id and symbol
BinanceRawTradeSchema.index({ id: -1, symbol: 1 }, { unique: true });
BinanceRawTradeSchema.index({ symbol: 1 });

export const BinanceRawTrade =
  mongoose.models.BinanceRawTrade || mongoose.model<IBinanceRawTrade>("BinanceRawTrade", BinanceRawTradeSchema, "binanceRawTrades");
