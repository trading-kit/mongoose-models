import mongoose, { Schema } from "mongoose";
const AlertSchema = new Schema({}, { strict: false });
export const Alert = mongoose.models.Alert || mongoose.model("Alert", AlertSchema);
