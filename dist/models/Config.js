import mongoose, { Schema } from "mongoose";
const ConfigSchema = new Schema({
    app: { type: String, required: true },
    mmLossAlertTime: { type: Number },
}, { strict: false });
export const Config = mongoose.models.Config || mongoose.model("Config", ConfigSchema, "config");
