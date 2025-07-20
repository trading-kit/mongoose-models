import mongoose, { Document, Schema } from "mongoose";

export interface IUserConfig extends Document {
  user: string;
  exchange: string;
  inr: number;
  usdt: number;
  buy_order_size: number;
  profit_percentage: number;
  not_allocated: boolean;
  role: string; // Default type is 'user'
  createdAt?: Date;
  updatedAt?: Date;
}

const UserConfigSchema: Schema<IUserConfig> = new Schema<IUserConfig>(
  {
    user: { type: String, required: true },
    exchange: { type: String, required: true },
    inr: { type: Number, default: 0 },
    usdt: { type: Number, default: 0 },
    buy_order_size: { type: Number, default: 0 },
    profit_percentage: { type: Number, default: 0 },
    not_allocated: { type: Boolean, default: false },
    role: { type: String, required: true }, // market-making, arbitrage, high-profit
  },
  {
    timestamps: true,
  }
);

UserConfigSchema.index({ exchange: 1, user: 1 }, { unique: true });

export const UserConfig = mongoose.models.UserConfig || mongoose.model<IUserConfig>("UserConfig", UserConfigSchema, "userConfig");
