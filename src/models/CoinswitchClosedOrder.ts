import mongoose from "mongoose";

const { Schema } = mongoose;

export interface ICoinswitchClosedOrder extends mongoose.Document {
  // _id: mongoose.Types.ObjectId;
  symbol: string;
  price: number;
  average_price: number;
  orig_qty: number;
  executed_qty: number;
  status: string;
  side: string;
  exchange: string;
  created_time: number;
  updated_time: number;
  ist: string;
  user: string;
  order_id: string;
}

const CoinswitchClosedOrderSchema = new Schema<ICoinswitchClosedOrder>(
  {
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
  },
  { strict: false }
);

//unique index id and user
CoinswitchClosedOrderSchema.index({ id: -1, user: -1 }, { unique: true });

// //create index on user and timestamp
CoinswitchClosedOrderSchema.index({ user: -1, updated_at: -1 });
// CoinswitchClosedOrderSchema.index({ timestamp: -1 });

//create index on
const CoinswitchClosedOrder =
  mongoose.models.CoinswitchClosedOrder || mongoose.model("CoinswitchClosedOrder", CoinswitchClosedOrderSchema, "coinswitchClosedOrders");


export { CoinswitchClosedOrder };
