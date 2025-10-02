import mongoose, { Schema } from "mongoose";
const ConfigSchema = new Schema({
    app: { type: String, required: true },
    mmLossAlertTime: { type: Number },
    orders_active: { type: Boolean, default: true }, // Default to true
    exchange: { type: String, required: false },
    isBuyActive: { type: Boolean, default: true },
    isSellActive: { type: Boolean, default: true },
}, { strict: false });
export const Config = mongoose.models.Config || mongoose.model("Config", ConfigSchema, "config");
//# sourceMappingURL=Config.js.map