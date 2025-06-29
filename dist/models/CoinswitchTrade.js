import mongoose from "mongoose";
const { Schema } = mongoose;
const CoinswitchTradeSchema = new Schema({
    price: Number,
    quantity: Number,
    fee_amount: Number,
    timestamp: Number,
    id: String,
    executed_qty: Number,
}, { strict: false });
//unique index id and user
CoinswitchTradeSchema.index({ id: -1, user: -1 }, { unique: true });
//create index on user and timestamp
CoinswitchTradeSchema.index({ user: -1, timestamp: -1 });
CoinswitchTradeSchema.index({ timestamp: -1 });
//create index on
const CoinswitchTrade = mongoose.model("CoinswitchTrade", CoinswitchTradeSchema, "coinswitchTrades");
//delete executed_qty :  0
export default CoinswitchTrade;
