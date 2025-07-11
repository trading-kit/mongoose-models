import mongoose, { Schema } from "mongoose";
const CoindcxMarketTradeSchema = new Schema({
    id: { type: String, required: true, unique: true },
    price: { type: Number },
    qty: { type: Number },
    quoteQty: { type: Number },
    time: { type: Number, required: true, index: true },
    isBuyerMaker: { type: Boolean },
    symbol: { type: String, required: true },
}, { strict: false });
// Create index on symbol and time
CoindcxMarketTradeSchema.index({ symbol: -1, time: -1 });
export const CoindcxMarketTrade = mongoose.models.CoindcxMarketTrade || mongoose.model("CoindcxMarketTrade", CoindcxMarketTradeSchema, "coindcxMarketTrades");
