import mongoose, { Document, Schema } from "mongoose";

export interface ILossAlert extends Document {
  user: string;
  timestamp: number;
  exchange: string;
  type: string; // e.g., "loss", "profit", etc.
}

const LossAlertSchema: Schema = new Schema<ILossAlert>(
  {
    user: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Number,
      required: true,
    },
    exchange: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { strict: false }
);

// Index
LossAlertSchema.index({ exchange: 1, user: 1 }, { unique: true });

export const LossAlert = mongoose.models.LossAlert || mongoose.model<ILossAlert>("LossAlert", LossAlertSchema);
