import mongoose, { Schema } from "mongoose";
const MyTradeSchema = new Schema({}, { strict: false });
export const MyTrade = mongoose.models.MyTrade || mongoose.model("MyTrade", MyTradeSchema, "myTrades");
//# sourceMappingURL=MyTrade.js.map