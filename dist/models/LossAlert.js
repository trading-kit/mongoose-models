import mongoose, { Schema } from "mongoose";
const LossAlertSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Number,
        required: true,
    },
    exchange: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
}, { strict: false });
// Index
LossAlertSchema.index({ exchange: 1, user: 1 }, { unique: true });
export const LossAlert = mongoose.models.LossAlert || mongoose.model("LossAlert", LossAlertSchema);
