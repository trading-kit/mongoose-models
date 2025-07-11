import mongoose, { Document } from "mongoose";
export interface IFlexibleLoan extends Document {
    coin: string;
    active: boolean;
    amount_usd: number;
}
export declare const FlexibleLoan: mongoose.Model<any, {}, {}, {}, any, any>;
//# sourceMappingURL=FlexibleLoan.d.ts.map