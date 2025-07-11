import mongoose, { Schema } from "mongoose";
const ProcessedTradeSchema = new Schema({
    user: { type: String, required: true },
    id: { type: Number, required: true },
    order_id: { type: String },
    side: { type: String, enum: ["buy", "sell"] },
    fee_amount: { type: Number },
    ecode: { type: String },
    quantity: { type: Number },
    price: { type: Number },
    symbol: { type: String },
    timestamp: { type: Number },
    fee_rate: { type: Number },
    // Calculated fields
    pl: { type: Number },
    plPercentage: { type: Number },
    averageCostBefore: { type: Number },
    averageCostAfter: { type: Number },
    remainingQuantity: { type: Number },
    cumulativeNetProfit: { type: Number },
    cumulativeTDS: { type: Number },
    cumulativeGain: { type: Number },
    cumulativeFees: { type: Number },
    // Metadata
    processed_at: { type: Date, default: Date.now },
    calculation_version: { type: String, default: "1.0" },
    date: { type: String },
    gain: { type: Number },
    quoteQty: { type: Number },
    tds: { type: Number },
}, {
    strict: false, // Allow additional fields
});
// Compound unique index on user + id + order_id
ProcessedTradeSchema.index({ user: 1, id: 1, order_id: 1 }, { unique: true });
// Indexes for common query patterns
ProcessedTradeSchema.index({ user: 1, symbol: 1, timestamp: 1 }); // For time-series analysis
ProcessedTradeSchema.index({ user: 1, symbol: 1, side: 1 }); // For buy/sell analysis
ProcessedTradeSchema.index({ user: 1, processed_at: 1 }); // For processing tracking
export const ProcessedTrade = mongoose.models.ProcessedTrade || mongoose.model("ProcessedTrade", ProcessedTradeSchema);
//# sourceMappingURL=ProcessedTrade.js.map