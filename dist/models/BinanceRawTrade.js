import mongoose, { Schema } from "mongoose";
const BinanceRawTradeSchema = new Schema({
    id: { type: Number, required: true },
    symbol: { type: String, required: true },
}, { strict: false });
// Unique index on id and symbol
BinanceRawTradeSchema.index({ id: -1, symbol: 1 }, { unique: true });
BinanceRawTradeSchema.index({ symbol: 1 });
export const BinanceRawTrade = mongoose.models.BinanceRawTrade || mongoose.model("BinanceRawTrade", BinanceRawTradeSchema, "binanceRawTrades");
