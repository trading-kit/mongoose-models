import mongoose, { Schema } from "mongoose";
const LossAlertSchema = new Schema({
    user: {
        type: String,
    },
    timestamp: {
        type: Number,
    },
    exchange: {
        type: String,
        required: true,
    },
    type: {
        type: String,
    },
}, { strict: false });
// Index
LossAlertSchema.index({ exchange: 1, user: 1 }, { unique: true });
export const LossAlert = mongoose.models.LossAlert || mongoose.model("LossAlert", LossAlertSchema);
