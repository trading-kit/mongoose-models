import { Document, Model } from "mongoose";
interface ICoinConfig extends Document {
    coin: string;
    is_balancer_active: boolean;
    is_buy_active: boolean;
    is_sell_active: boolean;
    exchange: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const CoinConfig: Model<ICoinConfig>;
export type { ICoinConfig };
//# sourceMappingURL=CoinConfig.d.ts.map