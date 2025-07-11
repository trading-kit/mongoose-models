import mongoose, { Document, Schema } from "mongoose";

export interface IBinanceRawDeposit extends Document {
  id: number;
}

const BinanceRawDepositSchema: Schema<IBinanceRawDeposit> = new Schema<IBinanceRawDeposit>(
  {
    id: { type: Number, unique: true, required: true },
  },
  { strict: false }
);

// Optional indexes
// BinanceRawDepositSchema.index({ id: -1, symbol: 1 }, { unique: true });
// BinanceRawDepositSchema.index({ id: 1 });

export const BinanceRawDeposit =
  mongoose.models.BinanceRawDeposit || mongoose.model<IBinanceRawDeposit>("BinanceRawDeposit", BinanceRawDepositSchema, "binanceRawDeposits");
