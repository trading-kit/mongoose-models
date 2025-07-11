import mongoose, { Schema } from "mongoose";
const BitgetRawSpotTransactionSchema = new Schema({
    id: { type: String, unique: true },
    coin: { type: String },
    spotTaxType: { type: String },
    amount: { type: Number },
    fee: { type: Number },
    balance: { type: Number },
    ts: { type: Number },
}, { strict: false });
// Uncomment and use indexes if needed
// BitgetRawSpotTransactionSchema.index({ id: -1, symbol: 1 }, { unique: true });
// BitgetRawSpotTransactionSchema.index({ symbol: 1 });
export const BitgetRawSpotTransaction = mongoose.models.BitgetRawSpotTransaction ||
    mongoose.model("BitgetRawSpotTransaction", BitgetRawSpotTransactionSchema, "bitgetRawSpotTransactions");
