import mongoose from 'mongoose';
const { Schema } = mongoose;
const TokenTransferSchema = new Schema({}, { strict: false });
//index on user and timeStamp
TokenTransferSchema.index({ user: -1, timeStamp: -1 });
const TokenTransfer = mongoose.model('TokenTransfer', TokenTransferSchema);
export default TokenTransfer;
