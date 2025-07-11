import mongoose, { Document, Schema } from "mongoose";

export interface IInsufficient extends Document {
  profit_per?: number;
}

const InsufficientSchema: Schema<IInsufficient> = new Schema<IInsufficient>(
  {
    profit_per: { type: Number },
  },
  { strict: false }
);

// Index on profit_per
InsufficientSchema.index({ profit_per: 1 });

export const Insufficient =
  mongoose.models.Insufficient || mongoose.model<IInsufficient>("Insufficient", InsufficientSchema);
