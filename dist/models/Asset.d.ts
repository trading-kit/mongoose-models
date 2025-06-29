import mongoose from 'mongoose';
declare const Asset: mongoose.Model<{
    depositTo: string;
    asset: string;
    withdrawalFrom: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    depositTo: string;
    asset: string;
    withdrawalFrom: string;
}, {}> & {
    depositTo: string;
    asset: string;
    withdrawalFrom: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    strict: false;
}, {
    depositTo: string;
    asset: string;
    withdrawalFrom: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    depositTo: string;
    asset: string;
    withdrawalFrom: string;
}>, {}> & mongoose.FlatRecord<{
    depositTo: string;
    asset: string;
    withdrawalFrom: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Asset;
