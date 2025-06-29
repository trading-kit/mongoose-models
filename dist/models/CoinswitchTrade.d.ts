import mongoose from "mongoose";
declare const CoinswitchTrade: mongoose.Model<{
    id?: string | null | undefined;
    timestamp?: number | null | undefined;
    fee_amount?: number | null | undefined;
    quantity?: number | null | undefined;
    price?: number | null | undefined;
    executed_qty?: number | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    id?: string | null | undefined;
    timestamp?: number | null | undefined;
    fee_amount?: number | null | undefined;
    quantity?: number | null | undefined;
    price?: number | null | undefined;
    executed_qty?: number | null | undefined;
}, {}> & {
    id?: string | null | undefined;
    timestamp?: number | null | undefined;
    fee_amount?: number | null | undefined;
    quantity?: number | null | undefined;
    price?: number | null | undefined;
    executed_qty?: number | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    strict: false;
}, {
    id?: string | null | undefined;
    timestamp?: number | null | undefined;
    fee_amount?: number | null | undefined;
    quantity?: number | null | undefined;
    price?: number | null | undefined;
    executed_qty?: number | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    id?: string | null | undefined;
    timestamp?: number | null | undefined;
    fee_amount?: number | null | undefined;
    quantity?: number | null | undefined;
    price?: number | null | undefined;
    executed_qty?: number | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    id?: string | null | undefined;
    timestamp?: number | null | undefined;
    fee_amount?: number | null | undefined;
    quantity?: number | null | undefined;
    price?: number | null | undefined;
    executed_qty?: number | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default CoinswitchTrade;
