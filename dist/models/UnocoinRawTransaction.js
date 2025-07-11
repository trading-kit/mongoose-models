import mongoose, { Schema } from "mongoose";
const UnocoinRawTransactionSchema = new Schema({
    coin: { type: String, required: true },
    uuid: { type: String, required: true, unique: true },
    timestamp: { type: Number }, // Add this if `timestamp` is part of the schema
}, { strict: false });
UnocoinRawTransactionSchema.index({ uuid: 1 }, { unique: true });
UnocoinRawTransactionSchema.index({ timestamp: -1 });
export const UnocoinRawTransaction = mongoose.models.UnocoinRawTransaction ||
    mongoose.model("UnocoinRawTransaction", UnocoinRawTransactionSchema, "unocoinRawTransactions");
