import mongoose, { Schema } from "mongoose";
const AssetSchema = new Schema({
    depositTo: { type: String, required: true },
    asset: { type: String, required: true },
    withdrawalFrom: { type: String, required: true },
});
// Unique index on depositTo, asset, and withdrawalFrom
AssetSchema.index({ depositTo: 1, asset: 1, withdrawalFrom: 1 }, { unique: true });
export const Asset = mongoose.models.Asset || mongoose.model("Asset", AssetSchema);
//# sourceMappingURL=Asset.js.map