import mongoose, { Document } from "mongoose";
export interface ICalculatorState extends Document {
    user: string;
    symbol: string;
    inventory: {
        price: number;
        quantity: number;
        timestamp: number;
    }[];
    averageCost: number;
    totalQuantity: number;
    summary: {
        profit: number;
        tds: number;
        netGain: number;
        totalVolume: number;
        tradeCount: number;
        buyCount: number;
        sellCount: number;
        cumulativeNetProfit: number;
        cumulativeTDS: number;
        cumulativeGain: number;
        cumulativeFees: number;
    };
    lastProcessedTradeId: number;
    lastProcessedTimestamp: number;
}
export declare const CalculatorState: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<ICalculatorState, {}, {}, {}, mongoose.Document<unknown, {}, ICalculatorState, {}> & ICalculatorState & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=CalculatorState.d.ts.map