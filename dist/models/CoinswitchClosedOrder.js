import mongoose from "mongoose";
const { Schema } = mongoose;
const CoinswitchClosedOrderSchema = new Schema({
    symbol: String,
    price: Number,
    average_price: Number,
    orig_qty: Number,
    executed_qty: Number,
    status: String,
    side: String,
    exchange: String,
    created_time: Number,
    updated_time: Number,
    ist: String,
    id: String,
    user: String,
}, { strict: false });
//unique index id and user
CoinswitchClosedOrderSchema.index({ id: -1, user: -1 }, { unique: true });
// //create index on user and timestamp
CoinswitchClosedOrderSchema.index({ user: -1, updated_at: -1 });
// CoinswitchClosedOrderSchema.index({ timestamp: -1 });
//create index on
const CoinswitchClosedOrder = mongoose.models.CoinswitchClosedOrder || mongoose.model("CoinswitchClosedOrder", CoinswitchClosedOrderSchema, "coinswitchClosedOrders");
//delete executed_qty :  0
export default CoinswitchClosedOrder;
