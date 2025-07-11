import mongoose, { Document, Schema } from "mongoose";

export interface ICoinswitchTrade extends Document {
  price: number;
  quantity: number;
  fee_amount: number;
  timestamp: number;
  id: string;
  executed_qty: number;
  user?: string; // Assuming `user` is optional based on the indexes
}

const CoinswitchTradeSchema: Schema<ICoinswitchTrade> = new Schema<ICoinswitchTrade>(
  {
    price: { type: Number },
    quantity: { type: Number },
    fee_amount: { type: Number },
    timestamp: { type: Number },
    id: { type: String },
    executed_qty: { type: Number },
  },
  { strict: false }
);

// Unique index on id and user
CoinswitchTradeSchema.index({ id: -1, user: -1 }, { unique: true });

// Create index on user and timestamp
CoinswitchTradeSchema.index({ user: -1, timestamp: -1 });
CoinswitchTradeSchema.index({ timestamp: -1 });

export const CoinswitchTrade =
  mongoose.models.CoinswitchTrade || mongoose.model<ICoinswitchTrade>("CoinswitchTrade", CoinswitchTradeSchema, "coinswitchTrades");
