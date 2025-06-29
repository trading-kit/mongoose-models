import mongoose from "mongoose";
const { Schema } = mongoose;

const TradeSummarySchema = new Schema({
    user: String,
    date: String,
    side: String,
    quoteAsset: String,
    fee: Number,
    quoteVolume: Number,
}, { strict: false });

TradeSummarySchema.index({ user: 1, date: -1, side: 1, quoteAsset: 1 }, { unique: true });
const TradeSummary = mongoose.model("TradeSummary", TradeSummarySchema, "tradesummary");

export default TradeSummary;
