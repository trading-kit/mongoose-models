import mongoose, { Schema } from "mongoose";
const TradeSummarySchema = new Schema({
    user: { type: String, required: true },
    date: { type: String, required: true },
    side: { type: String, required: true },
    quoteAsset: { type: String, required: true },
    fee: { type: Number, required: true },
    quoteVolume: { type: Number, required: true },
}, { strict: false });
// Unique index on user, date, side, and quoteAsset
TradeSummarySchema.index({ user: 1, date: -1, side: 1, quoteAsset: 1 }, { unique: true });
export const TradeSummary = mongoose.models.TradeSummary || mongoose.model("TradeSummary", TradeSummarySchema, "tradesummary");
