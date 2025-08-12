import mongoose, { Schema } from "mongoose";

export interface IGiottusTrade extends Document {
  date: Date;
  market: string;
  tds: number;
  tds_asset: string;
  fee: number;
  fee_asset: string;
  total: number;
  amount: number;
  price: number;
  gst: number;
  id: string;
  coinpair: string;
  type: string;
  user: string;

}

const GiottusTradeSchema: Schema<IGiottusTrade> = new Schema<IGiottusTrade>(
  {
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
  },
  { strict: false }
);

// Compound index for faster queries
GiottusTradeSchema.index({ user: -1, id: -1 }, { unique: true });
GiottusTradeSchema.index({ user: -1, date: -1, id: -1 });

export const GiottusTrade = mongoose.models.GiottusTrade || mongoose.model<IGiottusTrade>("GiottusTrade", GiottusTradeSchema, "giottusTrades");
