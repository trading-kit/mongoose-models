import mongoose from "mongoose";
const { Schema } = mongoose;

const BitgetRawTradeSchema: any = new Schema(
  {
    userId: { type: String },
    symbol: { type: String },
    orderId: { type: String },
    tradeId: { type: String, unique: true },
    orderType: { type: String },
    side: { type: String },
    priceAvg: { type: Number },
    size: { type: Number },
    amount: { type: Number },
    feeDetail: {
      deduction: { type: Number },
      // feeCoin: { type: String },
      // totalDeductionFee: { type: String },
      totalFee: { type: Number },
    },
    tradeScope: { type: String },
    cTime: { type: Number },
    uTime: { type: Number },
  },
  { strict: false }
);

// BitgetRawTradeSchema.index({ id: -1, symbol: 1 }, { unique: true });
// BitgetRawTradeSchema.index({ symbol: 1 });

const BitgetRawTrade = mongoose.model("BitgetRawTrade", BitgetRawTradeSchema, "bitgetRawTrades");

export default BitgetRawTrade;
