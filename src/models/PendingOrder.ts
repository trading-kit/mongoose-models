import mongoose, { Document, Schema } from "mongoose";

export interface IPendingOrder extends Document {
  id: number;
}

const PendingOrderSchema: Schema<IPendingOrder> = new Schema<IPendingOrder>(
  {
    id: { type: Number, unique: true },
  },
  { strict: false }
);

export const PendingOrder =
  mongoose.models.PendingOrder || mongoose.model<IPendingOrder>("PendingOrder", PendingOrderSchema, "pendingOrders");
