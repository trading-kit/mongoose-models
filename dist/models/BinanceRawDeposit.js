import mongoose from "mongoose";
const { Schema } = mongoose;
const BinanceRawDepositSchema = new Schema({
    id: { type: Number, unique: true },
    // symbol: { type: String },
}, { strict: false });
// BinanceRawDepositSchema.index({ id: -1, symbol: 1 }, { unique: true });
// BinanceRawDepositSchema.index({ id: 1 });
const BinanceRawDeposit = mongoose.model("BinanceRawDeposit", BinanceRawDepositSchema, "binanceRawDeposits");
export default BinanceRawDeposit;
