import mongoose, { Document, Schema } from "mongoose";

export interface IBitgetRawP2P extends Document {
  id: string;
  coin: string;
  spotTaxType: string;
  amount: number;
  fee: number;
  balance: number;
  ts: number;
}

const BitgetRawP2PSchema: Schema<IBitgetRawP2P> = new Schema<IBitgetRawP2P>({
  id: { type: String, unique: true },
  coin: { type: String },
  spotTaxType: { type: String },
  amount: { type: Number },
  fee: { type: Number },
  balance: { type: Number },
  ts: { type: Number },
});

// Uncomment and use indexes if needed
// BitgetRawP2PSchema.index({ id: -1, symbol: 1 }, { unique: true });
// BitgetRawP2PSchema.index({ symbol: 1 });

export const BitgetRawP2P =
  mongoose.models.BitgetRawP2P || mongoose.model<IBitgetRawP2P>("BitgetRawP2P", BitgetRawP2PSchema, "BitgetRawP2Ps");
