import mongoose, { Schema } from "mongoose";
const TokenTransferSchema = new Schema({
    user: { type: String, required: true },
    timeStamp: { type: Date, required: true },
}, { strict: false });
// Index on user and timeStamp
TokenTransferSchema.index({ user: -1, timeStamp: -1 });
export const TokenTransfer = mongoose.models.TokenTransfer || mongoose.model("TokenTransfer", TokenTransferSchema);
