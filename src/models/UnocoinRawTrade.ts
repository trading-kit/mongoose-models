import mongoose from "mongoose";
const { Schema } = mongoose;

const UnocoinRawTradeSchema: any = new Schema(
  {
    id: { type: Number, unique: true },
    coin: { type: String },
  },
  { strict: false }
);

// UnocoinRawTradeSchema.index({ id: -1, symbol: 1 }, { unique: true });
UnocoinRawTradeSchema.index({ coin: 1 });

const UnocoinRawTrade = mongoose.model("UnocoinRawTrade", UnocoinRawTradeSchema, "unocoinRawTrades");

export default UnocoinRawTrade;
