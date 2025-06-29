import mongoose from "mongoose";
const { Schema } = mongoose;

const BitgetRawSpotTransactionSchema: any = new Schema(
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

// BitgetRawSpotTransactionSchema.index({ id: -1, symbol: 1 }, { unique: true });
// BitgetRawSpotTransactionSchema.index({ symbol: 1 });

const BitgetRawSpotTransaction = mongoose.model("BitgetRawSpotTransaction", BitgetRawSpotTransactionSchema, "bitgetRawSpotTransactions");

export default BitgetRawSpotTransaction;
