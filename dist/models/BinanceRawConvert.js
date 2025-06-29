import mongoose from "mongoose";
const { Schema } = mongoose;
const BinanceRawConvertSchema = new Schema({
    orderId: { type: Number, unique: true },
    // symbol: { type: String },
}, { strict: false });
// BinanceRawConvertSchema.index({ id: -1, symbol: 1 }, { unique: true });
// BinanceRawConvertSchema.index({ id: 1 });
const BinanceRawConvert = mongoose.model("BinanceRawConvert", BinanceRawConvertSchema, "binanceRawConverts");
export default BinanceRawConvert;
