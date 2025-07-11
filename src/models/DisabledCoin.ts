import mongoose, { Document, Schema } from "mongoose";

export interface IDisabledCoin extends Document {
  coin: string;
  disabled: boolean;
  exchange: string;
}

const DisabledCoinSchema: Schema<IDisabledCoin> = new Schema<IDisabledCoin>(
  {
    coin: { type: String, unique: true },
    disabled: { type: Boolean, default: false },
    exchange: { type: String, required: true },
  },
  { strict: false }
);

// Unique index on coin and exchange
DisabledCoinSchema.index({ coin: 1, exchange: 1 }, { unique: true });

export const DisabledCoin =
  mongoose.models.DisabledCoin || mongoose.model<IDisabledCoin>("DisabledCoin", DisabledCoinSchema);
