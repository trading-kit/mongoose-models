import mongoose, { Schema } from "mongoose";
const UserConfigSchema = new Schema({
    user: { type: String, required: true },
    exchange: { type: String, required: true },
    inr_maintained: { type: Number, default: 0 },
    usdt_maintained: { type: Number, default: 0 },
    buy_order_size: { type: Number, default: 0 },
    profit_percentage: { type: Number, default: 0 },
    not_allocated: { type: Boolean, default: false },
    role: { type: String, required: true }, // market-making, arbitrage, high-profit
}, {
    timestamps: true,
});
UserConfigSchema.index({ exchange: 1, user: 1 }, { unique: true });
export const UserConfig = mongoose.models.UserConfig || mongoose.model("UserConfig", UserConfigSchema, "userConfig");
//# sourceMappingURL=UserConfig.js.map