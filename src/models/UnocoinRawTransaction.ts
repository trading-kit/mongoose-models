import mongoose from "mongoose";
const { Schema } = mongoose;

const UnocoinRawTransactionSchema: any = new Schema(
  {
    // id: { type: Number },
    coin: { type: String },
    uuid: { type: String },
  },
  { strict: false }
);

// UnocoinRawTransactionSchema.index({ id: -1, symbol: 1 }, { unique: true });
UnocoinRawTransactionSchema.index({ uuid: 1 }, { unique: true });
UnocoinRawTransactionSchema.index({ timestamp: -1 });

const UnocoinRawTransaction = mongoose.model("UnocoinRawTransaction", UnocoinRawTransactionSchema, "unocoinRawTransactions");

export default UnocoinRawTransaction;
