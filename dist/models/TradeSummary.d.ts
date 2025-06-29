import mongoose from "mongoose";
declare const TradeSummary: mongoose.Model<{
    side?: string | null | undefined;
    user?: string | null | undefined;
    date?: string | null | undefined;
    fee?: number | null | undefined;
    quoteAsset?: string | null | undefined;
    quoteVolume?: number | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    side?: string | null | undefined;
    user?: string | null | undefined;
    date?: string | null | undefined;
    fee?: number | null | undefined;
    quoteAsset?: string | null | undefined;
    quoteVolume?: number | null | undefined;
}, {}> & {
    side?: string | null | undefined;
    user?: string | null | undefined;
    date?: string | null | undefined;
    fee?: number | null | undefined;
    quoteAsset?: string | null | undefined;
    quoteVolume?: number | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    strict: false;
}, {
    side?: string | null | undefined;
    user?: string | null | undefined;
    date?: string | null | undefined;
    fee?: number | null | undefined;
    quoteAsset?: string | null | undefined;
    quoteVolume?: number | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    side?: string | null | undefined;
    user?: string | null | undefined;
    date?: string | null | undefined;
    fee?: number | null | undefined;
    quoteAsset?: string | null | undefined;
    quoteVolume?: number | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    side?: string | null | undefined;
    user?: string | null | undefined;
    date?: string | null | undefined;
    fee?: number | null | undefined;
    quoteAsset?: string | null | undefined;
    quoteVolume?: number | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default TradeSummary;
