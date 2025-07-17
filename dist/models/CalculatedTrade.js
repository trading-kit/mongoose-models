import mongoose, { Schema } from "mongoose";
const CalculatedTradeSchema = new Schema({
    exchange: { type: String, required: true }, // Default to "coindcx
    user: { type: String, required: true },
    id: { type: Number, required: true },
    side: { type: String, enum: ["buy", "sell"], required: true },
    fee_amount: { type: Number, required: true },
    ecode: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    symbol: { type: String, required: true },
    timestamp: { type: Number, required: true },
    order_id: { type: String, required: true },
    processed: { type: Boolean, required: true },
    pl: { type: Number, required: true },
    pl_percent: { type: Number, required: true },
    avg_cost_before: { type: Number, required: true },
    rem_qty: { type: Number, required: true },
    avg_cost_after: { type: Number, required: true },
    cum_np: { type: Number, required: true },
    cum_tds: { type: Number, required: true },
    cum_gain: { type: Number, required: true },
    cum_fees: { type: Number, required: true },
    tds: { type: Number, required: true },
    gain: { type: Number, required: true },
    date: { type: String, required: true },
    base_asset: { type: String, required: true },
    quote_asset: { type: String, required: true },
    usdt_price_at_trade: { type: Number },
    price_inr: { type: Number, required: true },
    fee_inr: { type: Number, required: true },
    total_inr: { type: Number, required: true },
    tds_inr: { type: Number, required: true },
}, {
    strict: true,
});
// Compound unique index on id + order_id
CalculatedTradeSchema.index({ exchange: 1, user: 1, id: 1, order_id: 1 }, { unique: true });
export const CalculatedTrade = mongoose.models.CalculatedTrade || mongoose.model("CalculatedTrade", CalculatedTradeSchema);
//# sourceMappingURL=CalculatedTrade.js.map