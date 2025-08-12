import mongoose, { Schema } from "mongoose";
const GiottusTradeSchema = new Schema({
    date: { type: Date, required: true },
    market: { type: String, required: true },
    tds: { type: Number, required: true },
    tds_asset: { type: String, required: true },
    fee: { type: Number, required: true },
    fee_asset: { type: String, required: true },
    total: { type: Number, required: true },
    amount: { type: Number, required: true },
    price: { type: Number, required: true },
    gst: { type: Number, required: true },
    id: { type: String, required: true },
    coinpair: { type: String, required: true },
    type: { type: String, required: true },
    user: { type: String, required: true },
}, { strict: false });
// Compound index for faster queries
GiottusTradeSchema.index({ user: -1, id: -1 }, { unique: true });
GiottusTradeSchema.index({ user: -1, date: -1, id: -1 });
export const GiottusTrade = mongoose.models.GiottusTrade || mongoose.model("GiottusTrade", GiottusTradeSchema, "giottusTrades");
//# sourceMappingURL=GiottusTrade.js.map