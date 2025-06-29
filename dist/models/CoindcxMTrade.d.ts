import mongoose from "mongoose";
declare const CoindcxMarketTrade: mongoose.Model<{
    symbol: string;
    id: string;
    time: number;
    price?: number | null | undefined;
    qty?: number | null | undefined;
    quoteQty?: number | null | undefined;
    isBuyerMaker?: any;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    symbol: string;
    id: string;
    time: number;
    price?: number | null | undefined;
    qty?: number | null | undefined;
    quoteQty?: number | null | undefined;
    isBuyerMaker?: any;
}, {}> & {
    symbol: string;
    id: string;
    time: number;
    price?: number | null | undefined;
    qty?: number | null | undefined;
    quoteQty?: number | null | undefined;
    isBuyerMaker?: any;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    strict: false;
}, {
    symbol: string;
    id: string;
    time: number;
    price?: number | null | undefined;
    qty?: number | null | undefined;
    quoteQty?: number | null | undefined;
    isBuyerMaker?: any;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    symbol: string;
    id: string;
    time: number;
    price?: number | null | undefined;
    qty?: number | null | undefined;
    quoteQty?: number | null | undefined;
    isBuyerMaker?: any;
}>, {}> & mongoose.FlatRecord<{
    symbol: string;
    id: string;
    time: number;
    price?: number | null | undefined;
    qty?: number | null | undefined;
    quoteQty?: number | null | undefined;
    isBuyerMaker?: any;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default CoindcxMarketTrade;
