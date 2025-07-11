import mongoose, { Document, Schema } from "mongoose";

export interface IBinanceRawWithdrawal extends Document {
  id: string;
  // Add other fields here if needed
}

const BinanceRawWithdrawalSchema: Schema<IBinanceRawWithdrawal> = new Schema(
  {
    id: { type: String, unique: true, required: true },
    // Add other fields here if needed
  },
  { strict: false }
);

// Uncomment and modify indexes as needed
// BinanceRawWithdrawalSchema.index({ id: -1, symbol: 1 }, { unique: true });
// BinanceRawWithdrawalSchema.index({ id: 1 });

export const BinanceRawWithdrawal =
  mongoose.models.BinanceRawWithdrawal ||
  mongoose.model<IBinanceRawWithdrawal>("BinanceRawWithdrawal", BinanceRawWithdrawalSchema, "binanceRawWithdrawals");
