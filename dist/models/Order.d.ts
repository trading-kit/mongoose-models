import mongoose from 'mongoose';
declare const Order: mongoose.Model<{
    source: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    source: string;
}, {}> & {
    source: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    strict: false;
}, {
    source: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    source: string;
}>, {}> & mongoose.FlatRecord<{
    source: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Order;
