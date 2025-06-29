import mongoose, { Document, Model, Schema } from "mongoose";

// Compound index for faster queries

const CoindcxTradeSchema = new Schema(
  {
    id: { type: Number, required: true },
    side: String,
    fee_amount: String,
    ecode: String,
    quantity: String,
    price: String,
    symbol: String,
    timestamp: Number,
    fee_rate: Number,
    order_id: String,
    processed: { type: Boolean, default: false },
  },
  { strict: false }
);

CoindcxTradeSchema.index({ id: -1, user: -1, order_id: -1 }, { unique: true });
// CoindcxTradeSchema.index({ order_id: -1, user: -1 }, { unique: true });
CoindcxTradeSchema.index({ user: -1, timestamp: -1 });
CoindcxTradeSchema.index({ timestamp: -1 });
CoindcxTradeSchema.index({ user: 1, symbol: 1, timestamp: 1, processed: 1 });

//create index on
const CoindcxTrade = mongoose.model("CoindcxTrade", CoindcxTradeSchema, "coindcxTrades");

export default CoindcxTrade;
