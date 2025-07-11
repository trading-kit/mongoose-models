import mongoose, { Schema } from "mongoose";
const LossAlertThresholdSchema = new Schema({
    exchange: { type: String, required: true },
    symbol: { type: String, required: true },
    user: { type: String, required: true },
    threshold: { type: Number, required: true },
});
// Unique index on exchange, symbol, and user
LossAlertThresholdSchema.index({ exchange: 1, symbol: 1, user: 1 }, { unique: true });
export const LossAlertThreshold = mongoose.models.LossAlertThreshold || mongoose.model("LossAlertThreshold", LossAlertThresholdSchema);
//# sourceMappingURL=LossAlertThreshold.js.map