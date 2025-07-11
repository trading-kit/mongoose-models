import mongoose, { Schema } from "mongoose";
const BitgetRawDepositSchema = new Schema({
    orderId: { type: String, unique: true, required: true },
    coin: { type: String },
    spotTaxType: { type: String },
    amount: { type: Number },
    fee: { type: Number },
    balance: { type: Number },
    ts: { type: Number },
}, { strict: false });
export const BitgetRawDeposit = mongoose.models.BitgetRawDeposit || mongoose.model("BitgetRawDeposit", BitgetRawDepositSchema, "bitgetRawDeposits");
//# sourceMappingURL=BitgetRawDeposit.js.map