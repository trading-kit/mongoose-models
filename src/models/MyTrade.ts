import mongoose, { Document, Schema } from "mongoose";

export interface IMyTrade extends Document {
  [key: string]: any; // Allow dynamic properties since the schema is strict: false
}

const MyTradeSchema: Schema = new Schema<IMyTrade>({}, { strict: false });

export const MyTrade =
  mongoose.models.MyTrade || mongoose.model<IMyTrade>("MyTrade", MyTradeSchema, "myTrades");
