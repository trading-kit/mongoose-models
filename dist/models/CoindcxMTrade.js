import mongoose from "mongoose";
const { Schema } = mongoose;
const CoindcxMarketTradeSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    price: Number,
    qty: Number,
    quoteQty: Number,
    time: {
        type: Number,
        required: true,
        index: true,
    },
    isBuyerMaker: Boolean,
    symbol: {
        type: String,
        required: true,
        // index: true,
    },
}, { strict: false });
//create index on user and timestamp
CoindcxMarketTradeSchema.index({ symbol: -1, time: -1 });
//create index on
const CoindcxMarketTrade = mongoose.model("CoindcxMarketTrade", CoindcxMarketTradeSchema, "coindcxMarketTrades");
export default CoindcxMarketTrade;
