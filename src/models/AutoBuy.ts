import mongoose, { Document, Schema } from "mongoose";

export interface IAutoBuy extends Document {
  completed: boolean;
  coin?: string;
  timestamp?: Date;
}

const AutoBuySchema: Schema<IAutoBuy> = new Schema<IAutoBuy>(
  {
    completed: {
      type: Boolean,
      default: false,
    },
    coin: {
      type: String,
    },
    timestamp: {
      type: Date,
    },
  },
  { strict: false }
);

// Index on coin, completed, and timestamp
AutoBuySchema.index({ coin: -1, completed: -1, timestamp: -1 });

export const AutoBuy =
  mongoose.models.AutoBuy || mongoose.model<IAutoBuy>("AutoBuy", AutoBuySchema, "autoOn");
