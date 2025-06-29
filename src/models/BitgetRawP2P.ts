import mongoose from "mongoose";
const { Schema } = mongoose;

const BitgetRawP2PSchema: any = new Schema(
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

// BitgetRawP2PSchema.index({ id: -1, symbol: 1 }, { unique: true });
// BitgetRawP2PSchema.index({ symbol: 1 });

const BitgetRawP2P = mongoose.model("BitgetRawP2P", BitgetRawP2PSchema, "BitgetRawP2Ps");

export default BitgetRawP2P;
