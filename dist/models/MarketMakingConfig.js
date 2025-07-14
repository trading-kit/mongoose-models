import mongoose, { Schema } from "mongoose";
const MarketMakingConfigSchema = new Schema({
    symbol: { type: String, required: true },
    baseSpreadPercent: { type: Number, required: true },
    orderQty: { type: Number, required: true },
    maxBalance: { type: Number, required: true },
    user: { type: String, required: false }, // Optional field for user association
    exchange: { type: String, required: false }, // Optional field for exchange association
    bidSpreadPercent: { type: Number, required: false }, // Optional field for bid spread percent
    askSpreadPercent: { type: Number, required: false }, // Optional field for ask spread percent
    active: { type: Boolean, required: true, default: true }, // Active status of the market making configuration
}, {
    strict: false, // Allow dynamic properties
    timestamps: true, // Automatically manage createdAt and updatedAt timestamps
});
//unique index on symbol and user and exchange
MarketMakingConfigSchema.index({ exchange: 1, symbol: 1 }, { unique: true });
MarketMakingConfigSchema.index({ exchange: 1, user: 1 });
export const MarketMakingConfig = mongoose.models.MarketMakingConfig || mongoose.model("MarketMakingConfig", MarketMakingConfigSchema);
//# sourceMappingURL=MarketMakingConfig.js.map