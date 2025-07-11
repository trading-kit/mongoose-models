import mongoose, { Schema } from "mongoose";
const FlexibleLoanSchema = new Schema({
    coin: { type: String, unique: true },
    active: { type: Boolean, default: false },
    amount_usd: { type: Number, default: 0 },
}, { strict: false });
export const FlexibleLoan = mongoose.models.FlexibleLoan || mongoose.model("FlexibleLoan", FlexibleLoanSchema);
