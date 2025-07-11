import mongoose, { Schema } from "mongoose";
const BinanceRawDepositSchema = new Schema({
    id: { type: Number, unique: true, required: true },
}, { strict: false });
// Optional indexes
// BinanceRawDepositSchema.index({ id: -1, symbol: 1 }, { unique: true });
// BinanceRawDepositSchema.index({ id: 1 });
export const BinanceRawDeposit = mongoose.models.BinanceRawDeposit || mongoose.model("BinanceRawDeposit", BinanceRawDepositSchema, "binanceRawDeposits");
//# sourceMappingURL=BinanceRawDeposit.js.map