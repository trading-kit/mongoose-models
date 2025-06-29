import mongoose from 'mongoose';
const { Schema } = mongoose;
const TransactionSchema = new Schema({}, { strict: false });
const Transaction = mongoose.model('Transaction', TransactionSchema);
export default Transaction;
