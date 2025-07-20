import mongoose, { Document, Model, Schema } from "mongoose";

interface ICoinConfig extends Document {
  coin: string;
  is_balancer_active: boolean;
  is_buy_active: boolean;
  is_sell_active: boolean;
  exchange: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const CoinConfigSchema = new Schema<ICoinConfig>(
  {
    coin: { type: String, required: true, trim: true, lowercase: true },
    is_balancer_active: { type: Boolean, default: false },
    is_buy_active: { type: Boolean, default: false },
    is_sell_active: { type: Boolean, default: false },
    exchange: { type: String, required: true },
  },
  { timestamps: true }
);

CoinConfigSchema.index({ exchange: 1, coin: 1 }, { unique: true });

export const CoinConfig: Model<ICoinConfig> = mongoose.models.CoinConfig || mongoose.model<ICoinConfig>("CoinConfig", CoinConfigSchema, "coin_configs");

export type { ICoinConfig };
