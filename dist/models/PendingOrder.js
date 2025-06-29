import mongoose from "mongoose";
const { Schema } = mongoose;
const PendingOrderSchema = new Schema({
    id: { unique: true, type: Number },
}, { strict: false });
const PendingOrder = mongoose.model("PendingOrder", PendingOrderSchema, "pendingOrders");
export default PendingOrder;
