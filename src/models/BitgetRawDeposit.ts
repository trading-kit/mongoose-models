import mongoose from "mongoose";
const { Schema } = mongoose;

const BitgetRawDepositSchema: any = new Schema(
  {
    orderId: { type: String, unique: true },
    // coin: { type: String },
    // spotTaxType: { type: String },
    // amount: { type: Number },
    // fee: { type: Number },
    // balance: { type: Number },
    // ts: { type: Number },
  },
  { strict: false }
);

// BitgetRawDepositSchema.index({ id: -1, symbol: 1 }, { unique: true });
// BitgetRawDepositSchema.index({ symbol: 1 });

const BitgetRawDeposit = mongoose.model("BitgetRawDeposit", BitgetRawDepositSchema, "bitgetRawDeposits");

export default BitgetRawDeposit;
