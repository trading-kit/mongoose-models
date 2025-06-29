import mongoose from "mongoose";
declare const TradeSummary: mongoose.Model<{
    quoteAsset?: string | null | undefined;
    date?: string | null | undefined;
    user?: string | null | undefined;
    side?: string | null | undefined;
    fee?: number | null | undefined;
    quoteVolume?: number | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    quoteAsset?: string | null | undefined;
    date?: string | null | undefined;
    user?: string | null | undefined;
    side?: string | null | undefined;
    fee?: number | null | undefined;
    quoteVolume?: number | null | undefined;
}, {}> & {
    quoteAsset?: string | null | undefined;
    date?: string | null | undefined;
    user?: string | null | undefined;
    side?: string | null | undefined;
    fee?: number | null | undefined;
    quoteVolume?: number | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    strict: false;
}, {
    quoteAsset?: string | null | undefined;
    date?: string | null | undefined;
    user?: string | null | undefined;
    side?: string | null | undefined;
    fee?: number | null | undefined;
    quoteVolume?: number | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    quoteAsset?: string | null | undefined;
    date?: string | null | undefined;
    user?: string | null | undefined;
    side?: string | null | undefined;
    fee?: number | null | undefined;
    quoteVolume?: number | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    quoteAsset?: string | null | undefined;
    date?: string | null | undefined;
    user?: string | null | undefined;
    side?: string | null | undefined;
    fee?: number | null | undefined;
    quoteVolume?: number | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default TradeSummary;
