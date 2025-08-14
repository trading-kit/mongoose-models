import mongoose, { Schema } from "mongoose";
const UserConfigSchema = new Schema({
    user: { type: String, required: true },
    exchange: { type: String, required: true },
    inr_maintained: { type: Number, required: true },
    usdt_maintained: { type: Number, required: true },
    buy_order_size: { type: Number, default: 0 },
    profit_percentage: { type: Number, required: false },
    role: { type: String, required: true },
    blacklisted_coins: { type: [String], default: [] },
    orders_active: { type: Boolean, default: true },
    buy_orders_active: { type: Boolean, default: true },
    sell_orders_active: { type: Boolean, default: true },
}, {
    timestamps: true,
});
UserConfigSchema.index({ exchange: 1, user: 1 }, { unique: true });
export const UserConfig = mongoose.models.UserConfig || mongoose.model("UserConfig", UserConfigSchema, "user_configs");
//# sourceMappingURL=UserConfig.js.map