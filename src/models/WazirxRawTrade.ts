import mongoose from "mongoose";
const { Schema } = mongoose;

const WazirxRawTradeSchema = new Schema(
  {
    id: { type: Number },
    symbol: { type: String },
  },
  { strict: false }
);

WazirxRawTradeSchema.index({ id: -1, symbol: 1 }, { unique: true });
WazirxRawTradeSchema.index({ symbol: 1 });

const WazirxRawTrade = mongoose.model("WazirxRawTrade", WazirxRawTradeSchema, "wazirxRawTrades");

export default WazirxRawTrade;
