import mongoose, { Document, Model } from "mongoose";
interface IProcessedTrade extends Document {
    user: string;
    id: number;
    order_id: string;
    side: "buy" | "sell";
    fee_amount: number;
    ecode: string;
    quantity: number;
    price: number;
    symbol: string;
    timestamp: number;
    fee_rate: number;
    pl: number;
    plPercentage: number;
    averageCostBefore: number;
    averageCostAfter: number;
    remainingQuantity: number;
    cumulativeNetProfit: number;
    cumulativeTDS: number;
    cumulativeGain: number;
    cumulativeFees: number;
    processed_at: Date;
    calculation_version: string;
    date: string;
    gain: number;
    quoteQty: number;
    tds: number;
}
declare const ProcessedTradeSchema: mongoose.Schema<IProcessedTrade, mongoose.Model<IProcessedTrade, any, any, any, mongoose.Document<unknown, any, IProcessedTrade, any> & IProcessedTrade & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IProcessedTrade, mongoose.Document<unknown, {}, mongoose.FlatRecord<IProcessedTrade>, {}> & mongoose.FlatRecord<IProcessedTrade> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
declare const ProcessedTrade: Model<IProcessedTrade>;
export default ProcessedTrade;
export { IProcessedTrade, ProcessedTradeSchema, ProcessedTrade };
