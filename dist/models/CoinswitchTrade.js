import mongoose, { Schema } from "mongoose";
const CoinswitchTradeSchema = new Schema({
    price: { type: Number },
    quantity: { type: Number },
    fee_amount: { type: Number },
    timestamp: { type: Number },
    id: { type: String },
    executed_qty: { type: Number },
}, { strict: false });
// Unique index on id and user
CoinswitchTradeSchema.index({ id: -1, user: -1 }, { unique: true });
// Create index on user and timestamp
CoinswitchTradeSchema.index({ user: -1, timestamp: -1 });
CoinswitchTradeSchema.index({ timestamp: -1 });
export const CoinswitchTrade = mongoose.models.CoinswitchTrade || mongoose.model("CoinswitchTrade", CoinswitchTradeSchema, "coinswitchTrades");
