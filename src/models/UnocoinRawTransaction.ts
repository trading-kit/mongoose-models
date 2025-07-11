import mongoose, { Document, Schema } from "mongoose";

export interface IUnocoinRawTransaction extends Document {
  coin: string;
  uuid: string;
  timestamp?: number; // Optional if `timestamp` is not always present
}

const UnocoinRawTransactionSchema: Schema<IUnocoinRawTransaction> = new Schema<IUnocoinRawTransaction>(
  {
    coin: { type: String, required: true },
    uuid: { type: String, required: true },
    timestamp: { type: Number }, // Add this if `timestamp` is part of the schema
  },
  { strict: false }
);

UnocoinRawTransactionSchema.index({ uuid: 1 }, { unique: true });
UnocoinRawTransactionSchema.index({ timestamp: -1 });

export const UnocoinRawTransaction =
  mongoose.models.UnocoinRawTransaction ||
  mongoose.model<IUnocoinRawTransaction>("UnocoinRawTransaction", UnocoinRawTransactionSchema, "unocoinRawTransactions");
