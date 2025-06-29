import mongoose from "mongoose";
declare const PendingOrder: mongoose.Model<{
    id?: number | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    id?: number | null | undefined;
}, {}> & {
    id?: number | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    strict: false;
}, {
    id?: number | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    id?: number | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    id?: number | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default PendingOrder;
