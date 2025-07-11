import mongoose, { Schema } from "mongoose";
const ArbitrageSchema = new Schema({}, { strict: false });
// Index on profit_per
ArbitrageSchema.index({ profit_per: 1 });
export const Arbitrage = mongoose.models.Arbitrage || mongoose.model("Arbitrage", ArbitrageSchema);
