import mongoose, { Document, Schema } from "mongoose";

export interface IAlert extends Document {
  [key: string]: any; // Allow dynamic properties since the schema is strict: false
}

const AlertSchema: Schema = new Schema<IAlert>({}, { strict: false });

export const Alert =
  mongoose.models.Alert || mongoose.model<IAlert>("Alert", AlertSchema);
