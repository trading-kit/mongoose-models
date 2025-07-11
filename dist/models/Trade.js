import mongoose, { Schema } from "mongoose";
const TradeSchema = new Schema({
    id: { type: String, required: true },
    platform: { type: String },
    symbol: { type: String },
    time: { type: Date },
    perDiff: { type: Number },
    profit: { type: Number },
}, { strict: false });
// Indexes
TradeSchema.index({ platform: -1, time: -1, perDiff: -1, profit: -1 });
TradeSchema.index({ platform: -1, symbol: -1, perDiff: -1, time: -1, profit: -1 });
TradeSchema.index({ id: 1 }, { unique: true });
export const Trade = mongoose.models.Trade || mongoose.model("Trade", TradeSchema);
