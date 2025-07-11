import mongoose, { Document, Schema } from "mongoose";

export interface IMarketMakingConfig extends Document {
  index: number;
  symbol: string;
  baseSpreadPercent: number;
  orderQty: number;
  maxBalance: number;
  user: string; // Optional field for user association
  exchange: string; // Optional field for exchange association
}

const MarketMakingConfigSchema: Schema = new Schema<IMarketMakingConfig>({
  index: { type: Number, required: true },
  symbol: { type: String, required: true },
  baseSpreadPercent: { type: Number, required: true },
  orderQty: { type: Number, required: true },
  maxBalance: { type: Number, required: true },
  user: { type: String, required: false }, // Optional field for user association
  exchange: { type: String, required: false }, // Optional field for exchange association
});

//unique index on symbol and user and exchange
MarketMakingConfigSchema.index({ exchange: 1, symbol: 1 }, { unique: true });
MarketMakingConfigSchema.index({ exchange: 1, user: 1 });

const MarketMakingConfig = mongoose.models.MarketMakingConfig || mongoose.model<IMarketMakingConfig>("MarketMakingConfig", MarketMakingConfigSchema);

export default MarketMakingConfig;
