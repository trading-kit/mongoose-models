import mongoose from "mongoose";
const { Schema } = mongoose;
const DisabledCoinSchema = new Schema({
    coin: {
        type: String,
        unique: true,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    exchange: {
        type: String,
        required: true,
    },
}, { strict: false });
//unique on coin and exchange
DisabledCoinSchema.index({ coin: 1, exchange: 1 }, { unique: true });
const DisabledCoin = mongoose.model("DisabledCoin", DisabledCoinSchema);
// setTimeout(() => {
//   DisabledCoin.create({
//     coin: "e4c",
//     disabled: true,
//     exchange: "coindcx",
//   }).then((res) => {
//     console.log("DisabledCoin", res);
//   });
// }, 5000);
export default DisabledCoin;
