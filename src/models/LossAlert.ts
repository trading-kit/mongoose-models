import mongoose, { Document, Schema } from "mongoose";

export interface ILossAlert extends Document {
  [key: string]: any; // Allow dynamic properties since the schema is strict: false
}

const LossAlertSchema: Schema = new Schema<ILossAlert>(
  {
    user: {
      type: String,
    },
    timestamp: {
      type: Number,
    },
    exchange: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
  },
  { strict: false }
);

// Index
LossAlertSchema.index({ exchange: 1, user: 1 }, { unique: true });

export const LossAlert =
  mongoose.models.LossAlert || mongoose.model<ILossAlert>("LossAlert", LossAlertSchema);
