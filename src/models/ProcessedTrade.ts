import mongoose, { Document, Model, Schema } from "mongoose";

// 1. Define Mongoose interfaces
interface IProcessedTrade extends Document {
  user: string;
  id: number;
  order_id: string; // Optional field for order ID
  side: "buy" | "sell";
  fee_amount: number;
  ecode: string;
  quantity: number;
  price: number;
  symbol: string;
  timestamp: number;
  fee_rate: number;

  // Calculated fields
  pl: number;
  plPercentage: number;
  averageCostBefore: number;
  averageCostAfter: number;
  remainingQuantity: number;
  cumulativeNetProfit: number;
  cumulativeTDS: number;
  cumulativeGain: number;
  cumulativeFees: number;

  // Metadata
  processed_at: Date;
  calculation_version: string;

  date: string; // Optional field for formatted date
  gain: number; // Gain after TDS and fees
  quoteQty: number; // Optional field for quote quantity
  tds: number; // Tax Deducted at Source
}

// 2. Create ProcessedTrade schema
const ProcessedTradeSchema = new Schema<IProcessedTrade>(
  {
    user: { type: String, required: true },
    id: { type: Number, required: true },
    side: String,
    fee_amount: Number,
    ecode: String,
    quantity: Number,
    price: Number,
    symbol: String,
    timestamp: Number,
    fee_rate: Number,

    // Calculated fields
    pl: Number,
    plPercentage: Number,
    averageCostBefore: Number,
    averageCostAfter: Number,
    remainingQuantity: Number,
    cumulativeNetProfit: Number,
    cumulativeTDS: Number,
    cumulativeGain: Number,
    cumulativeFees: Number,

    // Metadata
    processed_at: { type: Date, default: Date.now },
    calculation_version: { type: String, default: "1.0" },

    date: String,
    gain: Number, // Gain after TDS and fees
    quoteQty: Number, // Optional field for quote quantity
    tds: Number,
  },
  {
    strict: false, // Allow additional fields
  }
);

// Compound unique index on user + id
ProcessedTradeSchema.index({ user: 1, id: 1, order_id: 1 }, { unique: true });

// Indexes for common query patterns
ProcessedTradeSchema.index({ user: 1, symbol: 1, timestamp: 1 }); // For time-series analysis
ProcessedTradeSchema.index({ user: 1, symbol: 1, side: 1 }); // For buy/sell analysis
ProcessedTradeSchema.index({ user: 1, processed_at: 1 }); // For processing tracking

const ProcessedTrade: Model<IProcessedTrade> = mongoose.model<IProcessedTrade>("ProcessedTrade", ProcessedTradeSchema);

export default ProcessedTrade;
export { IProcessedTrade, ProcessedTradeSchema, ProcessedTrade };
