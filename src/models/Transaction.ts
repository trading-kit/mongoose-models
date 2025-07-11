import mongoose, { Document, Schema } from "mongoose";

export interface ITransaction extends Document {
  // Define the fields you expect in the Transaction model here
  // For example:
  [key: string]: any; // Since the schema is strict: false, it allows dynamic fields
}

const TransactionSchema: Schema = new Schema<ITransaction>({}, { strict: false });

export const Transaction =
  mongoose.models.Transaction || mongoose.model<ITransaction>("Transaction", TransactionSchema);
