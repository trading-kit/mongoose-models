import mongoose, { Document, Schema } from "mongoose";

export interface ITokenTransfer extends Document {
  user: string;
  timeStamp: Date;
}

const TokenTransferSchema: Schema<ITokenTransfer> = new Schema<ITokenTransfer>(
  {
    user: { type: String, required: true },
    timeStamp: { type: Date, required: true },
  },
  { strict: false }
);

// Index on user and timeStamp
TokenTransferSchema.index({ user: -1, timeStamp: -1 });

export const TokenTransfer =
  mongoose.models.TokenTransfer || mongoose.model<ITokenTransfer>("TokenTransfer", TokenTransferSchema);
