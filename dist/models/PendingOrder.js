import mongoose, { Schema } from "mongoose";
const PendingOrderSchema = new Schema({
    id: { type: Number, unique: true },
}, { strict: false });
export const PendingOrder = mongoose.models.PendingOrder || mongoose.model("PendingOrder", PendingOrderSchema, "pendingOrders");
