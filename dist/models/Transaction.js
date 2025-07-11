import mongoose, { Schema } from "mongoose";
const TransactionSchema = new Schema({}, { strict: false });
export const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);
//# sourceMappingURL=Transaction.js.map