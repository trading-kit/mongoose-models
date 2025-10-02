import mongoose, { Schema } from "mongoose";
const NormalizedTradeSchema = new Schema({
    exchange: { type: String, required: true },
    user: { type: String, required: true },
    date: { type: Date, required: true },
    id: { type: Number, required: true },
    order_id: { type: String, required: true },
    timestamp: { type: Number, required: true },
    market: { type: String, required: true },
    side: { type: String, enum: ["buy", "sell"], required: true },
    tds: { type: Number, required: true },
    tds_asset: { type: String, required: true },
    fee: { type: Number, required: true },
    fee_asset: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true },
    net_qty: { type: Number, required: true },
    quote_qty: { type: Number, required: true },
    net_quote_qty: { type: Number, required: true },
    gst: { type: Number, required: true },
    ecode: { type: String, required: true },
    processed: { type: Boolean, required: true },
    base_asset: { type: String, required: true },
    quote_asset: { type: String, required: true },
    symbol: { type: String, required: true },
}, {
    strict: true,
});
// Compound unique index on id + order_id
NormalizedTradeSchema.index({ exchange: 1, user: 1, id: 1, order_id: 1 }, { unique: true });
NormalizedTradeSchema.index({ exchange: 1, user: 1, timestamp: 1 });
export const NormalizedTrade = mongoose.models.NormalizedTrade || mongoose.model("NormalizedTrade", NormalizedTradeSchema);
//# sourceMappingURL=NormalizedTrade.js.map