import mongoose, { Document } from "mongoose";
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
export declare const Asset: mongoose.Model<any, {}, {}, {}, any, any>;
//# sourceMappingURL=Asset.d.ts.map