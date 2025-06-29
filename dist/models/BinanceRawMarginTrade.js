import mongoose from "mongoose";
const { Schema } = mongoose;
const BinanceRawMarginTradeSchema = new Schema({
    id: { type: Number },
    symbol: { type: String },
}, { strict: false });
BinanceRawMarginTradeSchema.index({ id: -1, symbol: 1 }, { unique: true });
BinanceRawMarginTradeSchema.index({ symbol: 1 });
const BinanceRawMarginTrade = mongoose.model("BinanceRawMarginTrade", BinanceRawMarginTradeSchema, "binanceRawMarginTrades");
export default BinanceRawMarginTrade;
