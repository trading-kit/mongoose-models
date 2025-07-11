import mongoose, { Document, Schema } from "mongoose";

export interface IArbitrage extends Document {
  profit_per?: number;
}

const ArbitrageSchema: Schema<IArbitrage> = new Schema<IArbitrage>({}, { strict: false });

// Index on profit_per
ArbitrageSchema.index({ profit_per: 1 });

export const Arbitrage =
  mongoose.models.Arbitrage || mongoose.model<IArbitrage>("Arbitrage", ArbitrageSchema);
