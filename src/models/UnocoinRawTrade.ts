import mongoose, { Document, Schema } from "mongoose";

export interface IUnocoinRawTrade extends Document {
  id: number;
  coin: string;
}

const UnocoinRawTradeSchema: Schema<IUnocoinRawTrade> = new Schema(
  {
    id: { type: Number, unique: true },
    coin: { type: String },
  },
  { strict: false }
);

// Index on coin
UnocoinRawTradeSchema.index({ coin: 1 });

export const UnocoinRawTrade =
  mongoose.models.UnocoinRawTrade || mongoose.model<IUnocoinRawTrade>("UnocoinRawTrade", UnocoinRawTradeSchema, "unocoinRawTrades");
