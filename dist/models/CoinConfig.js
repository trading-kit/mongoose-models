import mongoose, { Schema } from "mongoose";
const CoinConfigSchema = new Schema({
    coin: { type: String, required: true, trim: true, lowercase: true },
    is_balancer_active: { type: Boolean, default: false },
    is_buy_active: { type: Boolean, default: false },
    is_sell_active: { type: Boolean, default: false },
    exchange: { type: String, required: true },
}, { timestamps: true });
CoinConfigSchema.index({ exchange: 1, coin: 1 }, { unique: true });
export const CoinConfig = mongoose.models.CoinConfig || mongoose.model("CoinConfig", CoinConfigSchema, "coin_configs");
//# sourceMappingURL=CoinConfig.js.map