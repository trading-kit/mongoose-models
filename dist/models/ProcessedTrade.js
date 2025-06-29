import mongoose, { Schema } from "mongoose";
// 2. Create ProcessedTrade schema
const ProcessedTradeSchema = new Schema({
    user: { type: String, required: true },
    id: { type: Number, required: true },
    side: String,
    fee_amount: Number,
    ecode: String,
    quantity: Number,
    price: Number,
    symbol: String,
    timestamp: Number,
    fee_rate: Number,
    // Calculated fields
    pl: Number,
    plPercentage: Number,
    averageCostBefore: Number,
    averageCostAfter: Number,
    remainingQuantity: Number,
    cumulativeNetProfit: Number,
    cumulativeTDS: Number,
    cumulativeGain: Number,
    cumulativeFees: Number,
    // Metadata
    processed_at: { type: Date, default: Date.now },
    calculation_version: { type: String, default: "1.0" },
    date: String,
    gain: Number, // Gain after TDS and fees
    quoteQty: Number, // Optional field for quote quantity
    tds: Number,
}, {
    strict: false, // Allow additional fields
});
// Compound unique index on user + id
ProcessedTradeSchema.index({ user: 1, id: 1, order_id: 1 }, { unique: true });
// Indexes for common query patterns
ProcessedTradeSchema.index({ user: 1, symbol: 1, timestamp: 1 }); // For time-series analysis
ProcessedTradeSchema.index({ user: 1, symbol: 1, side: 1 }); // For buy/sell analysis
ProcessedTradeSchema.index({ user: 1, processed_at: 1 }); // For processing tracking
const ProcessedTrade = mongoose.model("ProcessedTrade", ProcessedTradeSchema);
export default ProcessedTrade;
export { ProcessedTradeSchema, ProcessedTrade };
