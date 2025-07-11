import mongoose, { Schema } from "mongoose";
const OrderSchema = new Schema({
    source: { type: String, required: true },
}, { strict: false });
export const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);
//# sourceMappingURL=Order.js.map