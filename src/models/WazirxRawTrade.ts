import mongoose, { Document, Schema } from "mongoose";

export interface IWazirxRawTrade extends Document {
  id: number;
  symbol: string;
}

const WazirxRawTradeSchema: Schema<IWazirxRawTrade> = new Schema<IWazirxRawTrade>(
  {
    id: { type: Number },
    symbol: { type: String },
  },
  { strict: false }
);

// Indexes
WazirxRawTradeSchema.index({ id: -1, symbol: 1 }, { unique: true });
WazirxRawTradeSchema.index({ symbol: 1 });

export const WazirxRawTrade =
  mongoose.models.WazirxRawTrade || mongoose.model<IWazirxRawTrade>("WazirxRawTrade", WazirxRawTradeSchema, "wazirxRawTrades");
