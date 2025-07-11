import mongoose, { Schema } from "mongoose";
const PairSchema = new Schema({
    min_profit_per: { type: Number },
    buy_profit_per: { type: Number },
    instant_sell_per: { type: Number },
    instant_buy_per: { type: Number },
    symbol: { type: String, required: true },
    server_name: { type: String, required: true },
    buy_user: { type: String },
}, { strict: false });
// Indexes
PairSchema.index({ server_name: 1, isBuyActive: 1, isBuy: 1 });
PairSchema.index({ server_name: 1, active: 1, isBot: 1 });
export const Pair = mongoose.models.Pair || mongoose.model("Pair", PairSchema);
//# sourceMappingURL=Pair.js.map