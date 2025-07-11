import mongoose, { Schema } from "mongoose";
const BinanceRawWithdrawalSchema = new Schema({
    id: { type: String, unique: true, required: true },
    // Add other fields here if needed
}, { strict: false });
// Uncomment and modify indexes as needed
// BinanceRawWithdrawalSchema.index({ id: -1, symbol: 1 }, { unique: true });
// BinanceRawWithdrawalSchema.index({ id: 1 });
export const BinanceRawWithdrawal = mongoose.models.BinanceRawWithdrawal ||
    mongoose.model("BinanceRawWithdrawal", BinanceRawWithdrawalSchema, "binanceRawWithdrawals");
