import mongoose from "mongoose";

const { Schema } = mongoose;

const TradeSchema = new Schema({}, { strict: false });

TradeSchema.index({
  platform: -1,
  time: -1,
  perDiff: -1,
  profit: -1,
});

TradeSchema.index({
  platform: -1,
  symbol: -1,
  perDiff: -1,
  time: -1,
  profit: -1,
});

//create unique index on id
TradeSchema.index({ id: 1 }, { unique: true });

const Trade = mongoose.model("Trade", TradeSchema);

export default Trade;
