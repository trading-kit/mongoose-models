import mongoose, { Document, Schema } from "mongoose";

export interface IBitgetRawDeposit extends Document {
  orderId: string;
  coin?: string;
  spotTaxType?: string;
  amount?: number;
  fee?: number;
  balance?: number;
  ts?: number;
}

const BitgetRawDepositSchema: Schema<IBitgetRawDeposit> = new Schema<IBitgetRawDeposit>(
  {
    orderId: { type: String, unique: true, required: true },
    coin: { type: String },
    spotTaxType: { type: String },
    amount: { type: Number },
    fee: { type: Number },
    balance: { type: Number },
    ts: { type: Number },
  },
  { strict: false }
);

export const BitgetRawDeposit =
  mongoose.models.BitgetRawDeposit || mongoose.model<IBitgetRawDeposit>("BitgetRawDeposit", BitgetRawDepositSchema, "bitgetRawDeposits");
