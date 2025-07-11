import mongoose, { Schema } from "mongoose";
const DisabledCoinSchema = new Schema({
    coin: { type: String, unique: true },
    disabled: { type: Boolean, default: false },
    exchange: { type: String, required: true },
}, { strict: false });
// Unique index on coin and exchange
DisabledCoinSchema.index({ coin: 1, exchange: 1 }, { unique: true });
export const DisabledCoin = mongoose.models.DisabledCoin || mongoose.model("DisabledCoin", DisabledCoinSchema);
//# sourceMappingURL=DisabledCoin.js.map