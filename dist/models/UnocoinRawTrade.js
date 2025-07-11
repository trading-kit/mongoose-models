import mongoose, { Schema } from "mongoose";
const UnocoinRawTradeSchema = new Schema({
    id: { type: Number, unique: true },
    coin: { type: String },
}, { strict: false });
// Index on coin
UnocoinRawTradeSchema.index({ coin: 1 });
export const UnocoinRawTrade = mongoose.models.UnocoinRawTrade || mongoose.model("UnocoinRawTrade", UnocoinRawTradeSchema, "unocoinRawTrades");
//# sourceMappingURL=UnocoinRawTrade.js.map