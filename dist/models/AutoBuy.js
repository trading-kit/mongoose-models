import mongoose, { Schema } from "mongoose";
const AutoBuySchema = new Schema({
    completed: {
        type: Boolean,
        default: false,
    },
    coin: {
        type: String,
    },
    timestamp: {
        type: Date,
    },
}, { strict: false });
// Index on coin, completed, and timestamp
AutoBuySchema.index({ coin: -1, completed: -1, timestamp: -1 });
export const AutoBuy = mongoose.models.AutoBuy || mongoose.model("AutoBuy", AutoBuySchema, "autoOn");
//# sourceMappingURL=AutoBuy.js.map