import mongoose from "mongoose";
declare const CoinswitchClosedOrder: mongoose.Model<{
    symbol?: string | null | undefined;
    id?: string | null | undefined;
    exchange?: string | null | undefined;
    user?: string | null | undefined;
    side?: string | null | undefined;
    price?: number | null | undefined;
    executed_qty?: number | null | undefined;
    average_price?: number | null | undefined;
    orig_qty?: number | null | undefined;
    status?: string | null | undefined;
    created_time?: number | null | undefined;
    updated_time?: number | null | undefined;
    ist?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    symbol?: string | null | undefined;
    id?: string | null | undefined;
    exchange?: string | null | undefined;
    user?: string | null | undefined;
    side?: string | null | undefined;
    price?: number | null | undefined;
    executed_qty?: number | null | undefined;
    average_price?: number | null | undefined;
    orig_qty?: number | null | undefined;
    status?: string | null | undefined;
    created_time?: number | null | undefined;
    updated_time?: number | null | undefined;
    ist?: string | null | undefined;
}, {}> & {
    symbol?: string | null | undefined;
    id?: string | null | undefined;
    exchange?: string | null | undefined;
    user?: string | null | undefined;
    side?: string | null | undefined;
    price?: number | null | undefined;
    executed_qty?: number | null | undefined;
    average_price?: number | null | undefined;
    orig_qty?: number | null | undefined;
    status?: string | null | undefined;
    created_time?: number | null | undefined;
    updated_time?: number | null | undefined;
    ist?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    strict: false;
}, {
    symbol?: string | null | undefined;
    id?: string | null | undefined;
    exchange?: string | null | undefined;
    user?: string | null | undefined;
    side?: string | null | undefined;
    price?: number | null | undefined;
    executed_qty?: number | null | undefined;
    average_price?: number | null | undefined;
    orig_qty?: number | null | undefined;
    status?: string | null | undefined;
    created_time?: number | null | undefined;
    updated_time?: number | null | undefined;
    ist?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    symbol?: string | null | undefined;
    id?: string | null | undefined;
    exchange?: string | null | undefined;
    user?: string | null | undefined;
    side?: string | null | undefined;
    price?: number | null | undefined;
    executed_qty?: number | null | undefined;
    average_price?: number | null | undefined;
    orig_qty?: number | null | undefined;
    status?: string | null | undefined;
    created_time?: number | null | undefined;
    updated_time?: number | null | undefined;
    ist?: string | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    symbol?: string | null | undefined;
    id?: string | null | undefined;
    exchange?: string | null | undefined;
    user?: string | null | undefined;
    side?: string | null | undefined;
    price?: number | null | undefined;
    executed_qty?: number | null | undefined;
    average_price?: number | null | undefined;
    orig_qty?: number | null | undefined;
    status?: string | null | undefined;
    created_time?: number | null | undefined;
    updated_time?: number | null | undefined;
    ist?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default CoinswitchClosedOrder;
