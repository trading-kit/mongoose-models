import mongoose, { Document, Schema } from "mongoose";

export interface IBinanceRawConvert extends Document {
  orderId: number;
}

const BinanceRawConvertSchema: Schema<IBinanceRawConvert> = new Schema(
  {
    orderId: { type: Number, unique: true },
  },
  { strict: false }
);

// Uncomment and use indexes if needed
// BinanceRawConvertSchema.index({ id: -1, symbol: 1 }, { unique: true });
// BinanceRawConvertSchema.index({ id: 1 });

export const BinanceRawConvert =
  mongoose.models.BinanceRawConvert || mongoose.model<IBinanceRawConvert>("BinanceRawConvert", BinanceRawConvertSchema, "binanceRawConverts");
