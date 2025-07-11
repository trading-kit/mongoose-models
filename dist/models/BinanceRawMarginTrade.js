import mongoose, { Schema } from "mongoose";
const BinanceRawMarginTradeSchema = new Schema({
    id: { type: Number, required: true },
    symbol: { type: String, required: true },
}, { strict: false });
// Unique index on id and symbol
BinanceRawMarginTradeSchema.index({ id: -1, symbol: 1 }, { unique: true });
BinanceRawMarginTradeSchema.index({ symbol: 1 });
export const BinanceRawMarginTrade = mongoose.models.BinanceRawMarginTrade ||
    mongoose.model("BinanceRawMarginTrade", BinanceRawMarginTradeSchema, "binanceRawMarginTrades");
//# sourceMappingURL=BinanceRawMarginTrade.js.map