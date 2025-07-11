import mongoose from "mongoose";
declare const CoinswitchClosedOrder: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<{
    symbol?: string;
    id?: string;
    side?: string;
    user?: string;
    price?: number;
    average_price?: number;
    orig_qty?: number;
    executed_qty?: number;
    status?: string;
    exchange?: string;
    created_time?: number;
    updated_time?: number;
    ist?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    symbol?: string;
    id?: string;
    side?: string;
    user?: string;
    price?: number;
    average_price?: number;
    orig_qty?: number;
    executed_qty?: number;
    status?: string;
    exchange?: string;
    created_time?: number;
    updated_time?: number;
    ist?: string;
}, {}> & {
    symbol?: string;
    id?: string;
    side?: string;
    user?: string;
    price?: number;
    average_price?: number;
    orig_qty?: number;
    executed_qty?: number;
    status?: string;
    exchange?: string;
    created_time?: number;
    updated_time?: number;
    ist?: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    strict: false;
}, {
    symbol?: string;
    id?: string;
    side?: string;
    user?: string;
    price?: number;
    average_price?: number;
    orig_qty?: number;
    executed_qty?: number;
    status?: string;
    exchange?: string;
    created_time?: number;
    updated_time?: number;
    ist?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    symbol?: string;
    id?: string;
    side?: string;
    user?: string;
    price?: number;
    average_price?: number;
    orig_qty?: number;
    executed_qty?: number;
    status?: string;
    exchange?: string;
    created_time?: number;
    updated_time?: number;
    ist?: string;
}>, {}> & mongoose.FlatRecord<{
    symbol?: string;
    id?: string;
    side?: string;
    user?: string;
    price?: number;
    average_price?: number;
    orig_qty?: number;
    executed_qty?: number;
    status?: string;
    exchange?: string;
    created_time?: number;
    updated_time?: number;
    ist?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export { CoinswitchClosedOrder };
//# sourceMappingURL=CoinswitchClosedOrder.d.ts.map