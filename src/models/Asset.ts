import mongoose, { Document, Schema } from "mongoose";

export interface IAsset extends Document {
  canDeposit: boolean;
  depositTo: string;
  asset: string;
  withdrawalFrom: string;
  lastWithdrawAt: Number;
  isAutoDepositActive: boolean;
  locked: boolean;
  loan_in_usd: number;
}

const AssetSchema: Schema<IAsset> = new Schema<IAsset>(
  {
    canDeposit: { type: Boolean, default: false },
    depositTo: { type: String, required: true },
    asset: { type: String, required: true },
    withdrawalFrom: { type: String, required: true },
    lastWithdrawAt: { type: Number, default: 0 },
    isAutoDepositActive: { type: Boolean, default: false },
    locked: { type: Boolean, default: false },
    loan_in_usd: { type: Number, default: 0 },
  },
  {
    strict: false,
  }
);


AssetSchema.index({ depositTo: 1, asset: 1, withdrawalFrom: 1 }, { unique: true });
AssetSchema.index({ canDeposit: 1, depositTo: 1, asset: 1, locked: 1, lastWithdrawAt: 1 });
export const Asset = mongoose.models.Asset || mongoose.model<IAsset>("Asset", AssetSchema);
