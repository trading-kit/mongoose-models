import mongoose from "mongoose";
const { Schema } = mongoose;
const BinanceRawTradeSchema = new Schema({
    id: { type: Number },
    symbol: { type: String },
}, { strict: false });
BinanceRawTradeSchema.index({ id: -1, symbol: 1 }, { unique: true });
BinanceRawTradeSchema.index({ symbol: 1 });
const BinanceRawTrade = mongoose.model("BinanceRawTrade", BinanceRawTradeSchema, "binanceRawTrades");
export default BinanceRawTrade;
