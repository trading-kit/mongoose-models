import mongoose, { Document, Schema } from "mongoose";

export interface IBitgetRawTrade extends Document {
  userId: string;
  symbol: string;
  orderId: string;
  tradeId: string;
  orderType: string;
  side: string;
  priceAvg: number;
  size: number;
  amount: number;
  feeDetail: {
    deduction: number;
    totalFee: number;
  };
  tradeScope: string;
  cTime: number;
  uTime: number;
}

const BitgetRawTradeSchema: Schema<IBitgetRawTrade> = new Schema<IBitgetRawTrade>(
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
      totalFee: { type: Number },
    },
    tradeScope: { type: String },
    cTime: { type: Number },
    uTime: { type: Number },
  },
  { strict: false }
);

// Uncomment or add indexes as needed
// BitgetRawTradeSchema.index({ id: -1, symbol: 1 }, { unique: true });
// BitgetRawTradeSchema.index({ symbol: 1 });

export const BitgetRawTrade =
  mongoose.models.BitgetRawTrade || mongoose.model<IBitgetRawTrade>("BitgetRawTrade", BitgetRawTradeSchema, "bitgetRawTrades");
