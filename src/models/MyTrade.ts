import mongoose from "mongoose";

const { Schema } = mongoose;

const MyTradeSchema = new Schema({}, { strict: false });

const MyTrade = mongoose.model("MyTrade", MyTradeSchema, "myTrades");

export default MyTrade;
