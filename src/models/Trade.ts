import moment from "moment";
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

const model = mongoose.model("Trade", TradeSchema);

class Trade extends model {
  static async getRecentTradeVolume(platform: string, minutes: number = 60) {
    const startTimestamp = moment().subtract(minutes, "minutes").unix() * 1000;

    const trades = await Trade.aggregate([
      {
        $match: {
          platform,
          time: { $gt: startTimestamp },
        },
      },
      {
        $group: {
          _id: "$symbol",
          totalVolume: { $sum: "$quoteQty" },
        },
      },
    ]);

    return trades;
  }
}

export default Trade;
