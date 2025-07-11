import mongoose, { Document, Schema } from "mongoose";

export interface IAsset extends Document {
  depositTo: string;
  asset: string;
  withdrawalFrom: string;
}

const AssetSchema: Schema<IAsset> = new Schema<IAsset>({
  depositTo: { type: String, required: true },
  asset: { type: String, required: true },
  withdrawalFrom: { type: String, required: true },
});

// Unique index on depositTo, asset, and withdrawalFrom
AssetSchema.index({ depositTo: 1, asset: 1, withdrawalFrom: 1 }, { unique: true });

export const Asset =
  mongoose.models.Asset || mongoose.model<IAsset>("Asset", AssetSchema);
