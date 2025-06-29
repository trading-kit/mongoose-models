import { Document, Model } from "mongoose";
interface ICalculatorState extends Document {
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
declare const CalculatorState: Model<ICalculatorState>;
export default CalculatorState;
export type { ICalculatorState };
