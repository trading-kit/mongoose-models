import mongoose, { Document, Schema } from "mongoose";

export interface IFlexibleLoan extends Document {
  coin: string;
  active: boolean;
  amount_usd: number;
}

const FlexibleLoanSchema: Schema<IFlexibleLoan> = new Schema<IFlexibleLoan>(
  {
    coin: { type: String, unique: true },
    active: { type: Boolean, default: false },
    amount_usd: { type: Number, default: 0 },
  },
  { strict: false }
);

export const FlexibleLoan =
  mongoose.models.FlexibleLoan || mongoose.model<IFlexibleLoan>("FlexibleLoan", FlexibleLoanSchema);
