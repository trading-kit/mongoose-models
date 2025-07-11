import mongoose, { Document, Schema } from "mongoose";

export interface IBitgetRawSpotTransaction extends Document {
  id: string;
  coin: string;
  spotTaxType: string;
  amount: number;
  fee: number;
  balance: number;
  ts: number;
}

const BitgetRawSpotTransactionSchema: Schema = new Schema<IBitgetRawSpotTransaction>(
  {
    id: { type: String, unique: true },
    coin: { type: String },
    spotTaxType: { type: String },
    amount: { type: Number },
    fee: { type: Number },
    balance: { type: Number },
    ts: { type: Number },
  },
  { strict: false }
);

// Uncomment and use indexes if needed
// BitgetRawSpotTransactionSchema.index({ id: -1, symbol: 1 }, { unique: true });
// BitgetRawSpotTransactionSchema.index({ symbol: 1 });

export const BitgetRawSpotTransaction =
  mongoose.models.BitgetRawSpotTransaction ||
  mongoose.model<IBitgetRawSpotTransaction>("BitgetRawSpotTransaction", BitgetRawSpotTransactionSchema, "bitgetRawSpotTransactions");
