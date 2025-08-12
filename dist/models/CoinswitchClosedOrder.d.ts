import mongoose from "mongoose";
export interface ICoinswitchClosedOrder extends mongoose.Document {
    symbol: string;
    price: number;
    average_price: number;
    orig_qty: number;
    executed_qty: number;
    status: string;
    side: string;
    exchange: string;
    created_time: number;
    updated_time: number;
    ist: string;
    user: string;
    order_id: string;
}
export declare const CoinswitchClosedOrder: mongoose.Model<any, {}, {}, {}, any, any>;
//# sourceMappingURL=CoinswitchClosedOrder.d.ts.map