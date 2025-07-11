import mongoose, { Document, Schema } from "mongoose";

export interface ICalculatorState extends Document {
  user: string;
  symbol: string;
  inventory: {
    price: number;
    quantity: number;
    timestamp: number;
  }[];
  averageCost: number;
  totalQuantity: number;
  summary: {
    profit: number;
    tds: number;
    netGain: number;
    totalVolume: number;
    tradeCount: number;
    buyCount: number;
    sellCount: number;
    cumulativeNetProfit: number;
    cumulativeTDS: number;
    cumulativeGain: number;
    cumulativeFees: number;
  };
  lastProcessedTradeId: number;
  lastProcessedTimestamp: number;
}

const CalculatorStateSchema: Schema = new Schema<ICalculatorState>({
  user: { type: String, required: true, index: true },
  symbol: { type: String, required: true, index: true },
  inventory: [
    {
      price: { type: Number },
      quantity: { type: Number },
      timestamp: { type: Number },
    },
  ],
  averageCost: { type: Number },
  totalQuantity: { type: Number },
  summary: {
    profit: { type: Number },
    tds: { type: Number },
    netGain: { type: Number },
    totalVolume: { type: Number },
    tradeCount: { type: Number },
    buyCount: { type: Number },
    sellCount: { type: Number },
    cumulativeNetProfit: { type: Number },
    cumulativeTDS: { type: Number },
    cumulativeGain: { type: Number },
    cumulativeFees: { type: Number },
  },
  lastProcessedTradeId: { type: Number },
  lastProcessedTimestamp: { type: Number },
});

// Compound index for state collection
CalculatorStateSchema.index({ user: 1, symbol: 1 });

export const CalculatorState =
  mongoose.models.CalculatorState || mongoose.model<ICalculatorState>("CalculatorState", CalculatorStateSchema);

