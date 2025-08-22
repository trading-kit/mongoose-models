import mongoose, { Schema } from "mongoose";
const RealizedPnlSchema = new Schema({
    qty: Number,
    total: Number,
    pl: Number,
    pl_per: Number,
    currency: String,
    base: String,
    id: String,
    order_id: String,
    timestamp: Number,
    user: String,
    rate: Number,
    exchange: String,
    baseAsset: String,
    quoteAsset: String,
    gain: Number,
    tds: Number,
    buy_rate: Number,
    sell_rate: Number,
    buy_symbol: String,
    sell_symbol: String,
}, {
    strict: false,
});
//index on exchange user and timestamp
RealizedPnlSchema.index({ exchange: 1, user: 1, timestamp: -1 });
export const RealizedPnl = mongoose.models.RealizedPnl || mongoose.model("RealizedPnl", RealizedPnlSchema, "realized_pnls");
//# sourceMappingURL=RealizedPnl.js.map