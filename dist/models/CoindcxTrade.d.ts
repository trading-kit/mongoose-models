import mongoose from "mongoose";
declare const CoindcxTrade: mongoose.Model<{
    id: number;
    processed: any;
    symbol?: string | null | undefined;
    price?: string | null | undefined;
    side?: string | null | undefined;
    timestamp?: number | null | undefined;
    quantity?: string | null | undefined;
    fee_amount?: string | null | undefined;
    ecode?: string | null | undefined;
    fee_rate?: number | null | undefined;
    order_id?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    id: number;
    processed: any;
    symbol?: string | null | undefined;
    price?: string | null | undefined;
    side?: string | null | undefined;
    timestamp?: number | null | undefined;
    quantity?: string | null | undefined;
    fee_amount?: string | null | undefined;
    ecode?: string | null | undefined;
    fee_rate?: number | null | undefined;
    order_id?: string | null | undefined;
}, {}> & {
    id: number;
    processed: any;
    symbol?: string | null | undefined;
    price?: string | null | undefined;
    side?: string | null | undefined;
    timestamp?: number | null | undefined;
    quantity?: string | null | undefined;
    fee_amount?: string | null | undefined;
    ecode?: string | null | undefined;
    fee_rate?: number | null | undefined;
    order_id?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    strict: false;
}, {
    id: number;
    processed: any;
    symbol?: string | null | undefined;
    price?: string | null | undefined;
    side?: string | null | undefined;
    timestamp?: number | null | undefined;
    quantity?: string | null | undefined;
    fee_amount?: string | null | undefined;
    ecode?: string | null | undefined;
    fee_rate?: number | null | undefined;
    order_id?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    id: number;
    processed: any;
    symbol?: string | null | undefined;
    price?: string | null | undefined;
    side?: string | null | undefined;
    timestamp?: number | null | undefined;
    quantity?: string | null | undefined;
    fee_amount?: string | null | undefined;
    ecode?: string | null | undefined;
    fee_rate?: number | null | undefined;
    order_id?: string | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    id: number;
    processed: any;
    symbol?: string | null | undefined;
    price?: string | null | undefined;
    side?: string | null | undefined;
    timestamp?: number | null | undefined;
    quantity?: string | null | undefined;
    fee_amount?: string | null | undefined;
    ecode?: string | null | undefined;
    fee_rate?: number | null | undefined;
    order_id?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default CoindcxTrade;
