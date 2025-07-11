import mongoose, { Schema } from "mongoose";
const BitgetRawP2PSchema = new Schema({
    id: { type: String, unique: true },
    coin: { type: String },
    spotTaxType: { type: String },
    amount: { type: Number },
    fee: { type: Number },
    balance: { type: Number },
    ts: { type: Number },
});
// Uncomment and use indexes if needed
// BitgetRawP2PSchema.index({ id: -1, symbol: 1 }, { unique: true });
// BitgetRawP2PSchema.index({ symbol: 1 });
export const BitgetRawP2P = mongoose.models.BitgetRawP2P || mongoose.model("BitgetRawP2P", BitgetRawP2PSchema, "BitgetRawP2Ps");
//# sourceMappingURL=BitgetRawP2P.js.map