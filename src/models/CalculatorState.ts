import mongoose, { Document, Model, Schema } from "mongoose";

interface ICalculatorState extends Document {
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

const CalculatorStateSchema = new Schema<ICalculatorState>({
  user: { type: String, required: true, index: true },
  symbol: { type: String, required: true, index: true },
  inventory: [
    {
      price: Number,
      quantity: Number,
      timestamp: Number,
    },
  ],
  averageCost: Number,
  totalQuantity: Number,
  summary: {
    profit: Number,
    tds: Number,
    netGain: Number,
    totalVolume: Number,
    tradeCount: Number,
    buyCount: Number,
    sellCount: Number,
    cumulativeNetProfit: Number,
    cumulativeTDS: Number,
    cumulativeGain: Number,
    cumulativeFees: Number,
  },
  lastProcessedTradeId: Number,
  lastProcessedTimestamp: Number,
});

// Compound index for state collection
CalculatorStateSchema.index({ user: 1, symbol: 1 });

// Create models
// const CoindcxTrade: Model<ITrade> = mongoose.model<ITrade>("CoindcxTrade", TradeSchema);
const CalculatorState: Model<ICalculatorState> =
  mongoose.models.CalculatorState || // Use existing model if it exists
  mongoose.model<ICalculatorState>("CalculatorState", CalculatorStateSchema);
export default CalculatorState;
export type { ICalculatorState };
