import mongoose from "mongoose";
const { Schema } = mongoose;
const BinanceRawWithdrawalSchema = new Schema({
    id: { type: String, unique: true },
    // symbol: { type: String },
}, { strict: false });
// BinanceRawWithdrawalSchema.index({ id: -1, symbol: 1 }, { unique: true });
// BinanceRawWithdrawalSchema.index({ id: 1 });
const BinanceRawWithdrawal = mongoose.model("BinanceRawWithdrawal", BinanceRawWithdrawalSchema, "binanceRawWithdrawals");
export default BinanceRawWithdrawal;
