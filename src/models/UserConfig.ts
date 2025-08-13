import mongoose, { Document, Schema } from "mongoose";

export interface IUserConfig extends Document {
  user: string;
  exchange: string;
  inr_maintained: number;
  usdt_maintained: number;
  buy_order_size: number;
  profit_percentage?: number;
  role: string; // Default type is 'user'
  createdAt?: Date;
  updatedAt?: Date;
  blacklisted_coins?: string[]; // Optional field for blacklisted coins
}

const UserConfigSchema: Schema<IUserConfig> = new Schema<IUserConfig>(
  {
    user: { type: String, required: true },
    exchange: { type: String, required: true },
    inr_maintained: { type: Number, required: true },
    usdt_maintained: { type: Number, required: true },
    buy_order_size: { type: Number, default: 0 },
    profit_percentage: { type: Number, required: false },
    role: { type: String, required: true }, // market-making, arbitrage, high-profit
    blacklisted_coins: { type: [String], default: [] }, // Optional field for blacklisted coins
  },
  {
    timestamps: true,
  }
);

UserConfigSchema.index({ exchange: 1, user: 1 }, { unique: true });

export const UserConfig = mongoose.models.UserConfig || mongoose.model<IUserConfig>("UserConfig", UserConfigSchema, "user_configs");
