import mongoose from "mongoose";
const { Schema } = mongoose;
const UserConfigSchema = new Schema({
    user: { type: String, required: true },
    exchange: { type: String, required: true },
    inr: { type: Number, default: 0 },
    usdt: { type: Number, default: 0 },
    buy_order_size: { type: Number, default: 0 },
    profit_percentage: { type: Number, default: 0 },
    not_allocated: { type: Boolean, default: false },
}, {
    timestamps: true,
});
UserConfigSchema.index({ user: 1, exchange: 1 }, { unique: true });
const UserConfig = mongoose.models.UserConfig || mongoose.model("UserConfig", UserConfigSchema, "userConfig");
export default UserConfig;
//# sourceMappingURL=UserConfig.js.map