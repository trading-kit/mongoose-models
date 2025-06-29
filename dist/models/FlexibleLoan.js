import mongoose from 'mongoose';
const { Schema } = mongoose;
const FlexibleLoanSchema = new Schema({
    coin: {
        type: String,
        unique: true,
    },
    active: {
        type: Boolean,
        default: false,
    },
    amount_usd: {
        type: Number,
        default: 0,
    },
}, { strict: false });
const FlexibleLoan = mongoose.model('FlexibleLoan', FlexibleLoanSchema);
export default FlexibleLoan;
