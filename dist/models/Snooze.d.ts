import mongoose from 'mongoose';
declare const Snooze: mongoose.Model<{
    key: string;
    expiry_time: NativeDate;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    key: string;
    expiry_time: NativeDate;
}, {}> & {
    key: string;
    expiry_time: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    strict: false;
}, {
    key: string;
    expiry_time: NativeDate;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    key: string;
    expiry_time: NativeDate;
}>, {}> & mongoose.FlatRecord<{
    key: string;
    expiry_time: NativeDate;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Snooze;
