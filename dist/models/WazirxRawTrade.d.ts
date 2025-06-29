import mongoose from "mongoose";
declare const WazirxRawTrade: mongoose.Model<{
    symbol?: string | null | undefined;
    id?: number | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    symbol?: string | null | undefined;
    id?: number | null | undefined;
}, {}> & {
    symbol?: string | null | undefined;
    id?: number | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    strict: false;
}, {
    symbol?: string | null | undefined;
    id?: number | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    symbol?: string | null | undefined;
    id?: number | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    symbol?: string | null | undefined;
    id?: number | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default WazirxRawTrade;
