import mongoose, { Schema } from "mongoose";
const WazirxRawTradeSchema = new Schema({
    id: { type: Number },
    symbol: { type: String },
}, { strict: false });
// Indexes
WazirxRawTradeSchema.index({ id: -1, symbol: 1 }, { unique: true });
WazirxRawTradeSchema.index({ symbol: 1 });
export const WazirxRawTrade = mongoose.models.WazirxRawTrade || mongoose.model("WazirxRawTrade", WazirxRawTradeSchema, "wazirxRawTrades");
//# sourceMappingURL=WazirxRawTrade.js.map