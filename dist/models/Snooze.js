import mongoose, { Schema } from "mongoose";
const SnoozeSchema = new Schema({
    key: { type: String, required: true, unique: true },
    expiry_time: { type: Date, required: true, index: true },
}, { strict: false });
export const Snooze = mongoose.models.Snooze || mongoose.model("Snooze", SnoozeSchema);
