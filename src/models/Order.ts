import mongoose, { Document, Schema } from "mongoose";

export interface IOrder extends Document {
  source: string;
}

const OrderSchema: Schema = new Schema<IOrder>(
  {
    source: { type: String, required: true },
  },
  { strict: false }
);

export const Order =
  mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);
