import mongoose, { Document, Schema } from "mongoose";

export interface ISnooze extends Document {
  key: string;
  expiry_time: Date;
}

const SnoozeSchema: Schema<ISnooze> = new Schema<ISnooze>(
  {
    key: { type: String, required: true, unique: true },
    expiry_time: { type: Date, required: true, index: true },
  },
  { strict: false }
);

export const Snooze =
  mongoose.models.Snooze || mongoose.model<ISnooze>("Snooze", SnoozeSchema);
