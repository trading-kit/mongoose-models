import mongoose, { Schema } from "mongoose";
const TickerSchema = new Schema({}, { strict: false });
// Index on pair
TickerSchema.index({ pair: 1 });
// Unique index on exchange and pair
TickerSchema.index({ exchange: 1, pair: 1 }, { unique: true });
// Index on exchange, baseAsset, quoteAsset, and timestamp
TickerSchema.index({ exchange: 1, baseAsset: 1, quoteAsset: 1, timestamp: 1 });
export const Ticker = mongoose.models.Ticker || mongoose.model("Ticker", TickerSchema);
