import mongoose, { Schema } from "mongoose";
const InsufficientSchema = new Schema({
    profit_per: { type: Number },
}, { strict: false });
// Index on profit_per
InsufficientSchema.index({ profit_per: 1 });
export const Insufficient = mongoose.models.Insufficient || mongoose.model("Insufficient", InsufficientSchema);
