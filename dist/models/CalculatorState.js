import mongoose, { Schema } from "mongoose";
const CalculatorStateSchema = new Schema({
    user: { type: String, required: true, index: true },
    symbol: { type: String, required: true, index: true },
    inventory: [
        {
            price: Number,
            quantity: Number,
            timestamp: Number,
        },
    ],
    averageCost: Number,
    totalQuantity: Number,
    summary: {
        profit: Number,
        tds: Number,
        netGain: Number,
        totalVolume: Number,
        tradeCount: Number,
        buyCount: Number,
        sellCount: Number,
        cumulativeNetProfit: Number,
        cumulativeTDS: Number,
        cumulativeGain: Number,
        cumulativeFees: Number,
    },
    lastProcessedTradeId: Number,
    lastProcessedTimestamp: Number,
});
// Compound index for state collection
CalculatorStateSchema.index({ user: 1, symbol: 1 });
// Create models
// const CoindcxTrade: Model<ITrade> = mongoose.model<ITrade>("CoindcxTrade", TradeSchema);
const CalculatorState = mongoose.models.CalculatorState || // Use existing model if it exists
    mongoose.model("CalculatorState", CalculatorStateSchema);
export default CalculatorState;
